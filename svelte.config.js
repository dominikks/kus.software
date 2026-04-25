import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: [mdsvex({ extensions: ['.svx', '.md'] }), vitePreprocess()],
  extensions: ['.svelte', '.svx', '.md'],
};

export default config;
