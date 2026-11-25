import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    enhancedImages(),
    sveltekit({
      adapter: adapter(),
      preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
      extensions: ['.svelte', '.svx', '.md'],
    }),
  ],
};

export default config;
