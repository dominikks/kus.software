import type { Pathname } from '$app/types';

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
