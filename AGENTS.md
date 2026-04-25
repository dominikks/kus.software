# Agent Guidelines for kus.software

When working on this codebase, please adhere to the following project-specific guidelines:

## Code Style & Philosophy

- **Minimal & Redundancy-Free:** Write clean, minimal code. Avoid useless boilerplate or redundant logic.
- **Stick to Defaults:** Rely on language and framework defaults whenever possible rather than creating custom, overly complex abstractions. Keep it simple.

## CSS & Styling Structure

This project uses a clean, minimalist, and dependency-free CSS architecture (SCSS).

- **Global Variables & Tokens:** All colors, spacing, and structural variables are defined in `src/lib/style/global.scss`. The project strictly uses an **8-point spacing system** (e.g., `--space-2` = 8px, `--space-4` = 16px). **Do not use hardcoded pixel values** for margins or padding.
- **Mixins & Breakpoints:** Typography mixins (e.g., `@include text-meta()`) and responsive breakpoints (e.g., `$breakpoint-mobile`) are located in `src/lib/style/_variables.scss`.
- **Component Styling:** Use scoped `<style lang="scss">` blocks within Svelte components.
- **Typography:** The design opts for **flush-left typography** over justified text to optimize readability and accessibility.
- **Accessibility:** Always ensure focus outlines are visible for keyboard navigation (use `&:focus-visible` rather than stripping `outline: none;` completely).

## SEO & Sitemap

- **SEO Defaults:** Meta tags (OpenGraph, titles, descriptions) are centrally managed via `$lib/server/site.ts` and `src/routes/+layout.svelte`.
- **Sitemap Updates:** The sitemap is generated in `src/routes/sitemap.xml/+server.ts`.
  - **IMPORTANT:** Whenever you add a **new static page** to the site (e.g., a new route outside of dynamically loaded blog posts), you **must** manually add it to the `pages` array in the sitemap.
  - **Exception:** Do not add pages to the sitemap if they have a `noindex` tag (like legal or imprint pages).

## Quality Checks

- **Formatting & Linting:** Always run `npm run format` and `npm run lint` after making changes to ensure code style consistency.
- **Type Checking:** Always run `npm run check` to verify Svelte and TypeScript types. Fix any warnings or errors before committing.
