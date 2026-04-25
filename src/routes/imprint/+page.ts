import { getDefaultSeo } from '$lib/site';

export const load = ({ url }) => ({
  seo: {
    ...getDefaultSeo(url.pathname),
    noindex: true,
  },
});
