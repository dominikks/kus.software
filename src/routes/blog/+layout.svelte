<script lang="ts">
  import { resolve } from '$app/paths';
  import Footer from '$lib/components/Footer.svelte';
  import ProfileSection from '$lib/components/ProfileSection.svelte';
</script>

<ProfileSection />
<hr />

<main class="blog-page">
  <a class="back-link" href={resolve('/')}>Back to homepage</a>

  <article class="blog-post">
    <slot />
  </article>
</main>

<Footer />

<style lang="scss">
  .blog-page {
    margin: 0 auto;
    max-width: 720px;
    padding: 48px 20px 64px;
  }

  .back-link {
    color: var(--muted-color);
    text-decoration: none;
    width: fit-content;

    &:hover {
      color: var(--primary-color);
    }
  }

  .blog-post {
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
      margin-bottom: 16px;
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
