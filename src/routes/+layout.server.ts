import { getDefaultSeo, siteConfig } from '$lib/server/site';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = ({ url }) => ({
  seo: getDefaultSeo(url.pathname),
  siteName: siteConfig.name,
  // This is generated at build time during pre-rendering
  buildYear: new Date().getFullYear(),
});
