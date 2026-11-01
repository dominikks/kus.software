import type { Seo } from '$lib/models/seo';

export const siteConfig = {
  name: 'Dominik Kus',
  title: 'Dominik Kus - Software Engineer',
  description: 'I am Dominik Kus, a software engineer based in Dublin.',
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
