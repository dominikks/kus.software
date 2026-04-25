import { getPublishedBlogPosts } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
  posts: getPublishedBlogPosts(),
});
