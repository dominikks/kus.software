import type { Seo } from '$lib/models/seo';

export const siteConfig = {
  name: 'Dominik Kus',
  title: 'Dominik Kus - Computer Scientist',
  description: 'I am Dominik Kus, a computer scientist and software engineer based in Germany.',
  url: 'https://kus.software',
};

export function toAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function getDefaultSeo(pathname: string): Seo {
  const canonical = toAbsoluteUrl(pathname);

  return {
    title: siteConfig.title,
    description: siteConfig.description,
    canonical,
    openGraph: {
      type: 'website',
      title: siteConfig.title,
      description: siteConfig.description,
      url: canonical,
    },
    twitterCard: 'summary',
  };
}
