import { getPublishedBlogPosts } from '$lib/blog';
import { toAbsoluteUrl } from '$lib/site';

export const prerender = true;

export function GET() {
  const pages: Array<{ path: string; lastmod?: string }> = [
    { path: '/' },
    { path: '/imprint' },
    ...getPublishedBlogPosts().map((post) => ({
      path: post.url,
      lastmod: post.updated ?? post.date,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) =>
      `  <url>\n    <loc>${toAbsoluteUrl(page.path)}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}\n  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
