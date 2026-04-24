<script lang="ts">
  import { resolve } from '$app/paths';
  import Footer from '$lib/components/Footer.svelte';

  import '$lib/style/blog.scss';
</script>

<nav class="top-nav">
  <a class="back-link" href={resolve('/')}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    INDEX
  </a>
</nav>

<main>
  <article class="blog-post">
    <slot />
  </article>
</main>

<Footer />

<style lang="scss">
  @use '$lib/style/variables' as *;

  .top-nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    padding: 24px;

    background-color: rgba(252, 252, 251, 0.7);
    backdrop-filter: blur(8px);
    z-index: 1;

    @media (min-width: $breakpoint-mobile) {
      padding: 24px 40px;
    }
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);

    &:hover {
      color: var(--text-main);
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
</style>
