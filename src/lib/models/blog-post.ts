import type { Path } from '$app/types';

export type BlogPost = {
  slug: string;
  url: Path;
  absoluteUrl: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  published: boolean;
  image?: string;
};
