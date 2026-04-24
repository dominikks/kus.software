import type { Pathname } from '$app/types';
import { siteConfig, toAbsoluteUrl, type Seo } from '$lib/site';

type BlogFrontmatter = {
  title: string;
  date: string;
  updated?: string;
  description: string;
  published?: boolean;
};

export type BlogPost = {
  slug: string;
  url: Pathname;
  absoluteUrl: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  published: boolean;
  image?: string;
};

type MarkdownModule = {
  metadata?: Record<string, unknown>;
  ogImage?: string;
};

// Load all blog posts from the filesystem
const blogModules = import.meta.glob('/src/routes/blog/**/+page.md', { eager: true });
const blogPosts = Object.entries(blogModules)
  .map(([filePath, module]) => createBlogPost(filePath, module as MarkdownModule))
  .sort((left, right) => Date.parse(right.date) - Date.parse(left.date));

// Extract blog post metadata
function createBlogPost(filePath: string, module: MarkdownModule): BlogPost {
  const slug = extractSlug(filePath);
  const url = `/blog/${slug}` as Pathname;
  const metadata = parseFrontmatter(filePath, module.metadata);
  const image = module.ogImage ? toAbsoluteUrl(module.ogImage) : undefined;

  return {
    slug,
    url,
    absoluteUrl: toAbsoluteUrl(url),
    title: metadata.title,
    date: metadata.date,
    updated: metadata.updated,
    description: metadata.description,
    published: metadata.published !== false,
    image,
  };
}

function extractSlug(filePath: string): string {
  const match = /^\/src\/routes\/blog\/(.+)\/\+page\.md$/.exec(filePath);

  if (!match) {
    throw new Error(`Unexpected blog post path: ${filePath}`);
  }

  return match[1];
}

function parseFrontmatter(
  filePath: string,
  metadata: Record<string, unknown> | undefined,
): BlogFrontmatter {
  if (!metadata) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  const title = expectString(metadata.title, 'title', filePath);
  const date = expectDate(metadata.date, 'date', filePath);
  const description = expectString(metadata.description, 'description', filePath);
  const updated = metadata.updated ? expectDate(metadata.updated, 'updated', filePath) : undefined;
  const published = metadata.published;

  if (published !== undefined && typeof published !== 'boolean') {
    throw new Error(`Expected frontmatter field "published" to be a boolean in ${filePath}`);
  }

  return {
    title,
    date,
    updated,
    description,
    published,
  };
}

function expectString(value: unknown, field: string, filePath: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(
      `Expected frontmatter field "${field}" to be a non-empty string in ${filePath}`,
    );
  }

  return value;
}

function expectDate(value: unknown, field: string, filePath: string): string {
  const date = expectString(value, field, filePath);

  if (Number.isNaN(Date.parse(date))) {
    throw new Error(`Expected frontmatter field "${field}" to be a valid date in ${filePath}`);
  }

  return date;
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.published);
}

export function getBlogPostByPath(pathname: string): BlogPost | undefined {
  const normalizedPath =
    pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  return blogPosts.find((post) => post.url === normalizedPath);
}

export function getBlogPostSeo(post: BlogPost): Seo {
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    canonical: post.absoluteUrl,
    noindex: !post.published,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: post.absoluteUrl,
      image: post.image,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
    twitterCard: post.image ? 'summary_large_image' : 'summary',
  };
}
