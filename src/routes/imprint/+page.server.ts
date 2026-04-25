import { getDefaultSeo } from '$lib/server/site';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => ({
  seo: {
    ...getDefaultSeo(url.pathname),
    noindex: true,
  },
});
