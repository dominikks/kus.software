import { getPublishedBlogPosts } from '$lib/blog';

export const load = () => ({
  posts: getPublishedBlogPosts(),
});
