export type Seo = {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  openGraph: {
    type: 'website' | 'article';
    title: string;
    description: string;
    url: string;
    image?: string;
    publishedTime?: string;
    modifiedTime?: string;
  };
  twitterCard: 'summary' | 'summary_large_image';
};
