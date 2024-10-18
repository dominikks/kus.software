import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';

/** @type {import('typescript-eslint').Config} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  eslintConfigPrettier,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: ['.svelte-kit', 'build'],
  },
];
