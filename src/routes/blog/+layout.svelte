<main class="blog-post">
  <slot />
</main>

<style lang="scss">
  .blog-post {
    margin: 0 auto;
    max-width: 720px;
    min-height: 100vh;
    padding: 48px 20px 64px;

    :global(h1),
    :global(h2),
    :global(h3) {
      color: var(--primary-color);
      line-height: 1.2;
      margin-bottom: 16px;
    }

    :global(h1) {
      font-size: 40px;
    }

    :global(p),
    :global(li) {
      font-size: 20px;
      line-height: 1.7;
    }

    :global(a) {
      text-decoration: underline;
      text-underline-offset: 0.18em;
    }

    :global(img) {
      display: block;
      height: auto;
      margin: 32px 0;
      max-width: 100%;
    }

    :global(code) {
      font-size: 0.9em;
    }
  }
</style>
