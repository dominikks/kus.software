import { getDefaultSeo } from '$lib/site';

export const prerender = true;

export const load = ({ url }) => ({
  seo: getDefaultSeo(url.pathname),
  // This is generated at build time during pre-rendering
  buildYear: new Date().getFullYear(),
});
