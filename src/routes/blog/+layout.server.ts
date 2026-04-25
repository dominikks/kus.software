import { error } from '@sveltejs/kit';
import { getBlogPostByPath, getBlogPostSeo } from '$lib/server/blog';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
  const post = getBlogPostByPath(url.pathname);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post,
    seo: getBlogPostSeo(post),
  };
};
