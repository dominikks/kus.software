import { error } from '@sveltejs/kit';
import { getBlogPostByPath, getBlogPostSeo } from '$lib/blog';

export const load = ({ url }) => {
  const post = getBlogPostByPath(url.pathname);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post,
    seo: getBlogPostSeo(post),
  };
};
