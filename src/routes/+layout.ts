import { getDefaultSeo } from '$lib/site';

export const prerender = true;

export const load = ({ url }) => ({
  seo: getDefaultSeo(url.pathname),
});
