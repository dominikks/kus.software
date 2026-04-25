<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import TopNav from '$lib/components/TopNav.svelte';

  import '$lib/style/blog.scss';
</script>

<TopNav />

<main class="container">
  <article class="blog-post">
    <slot />
  </article>
</main>

<Footer />
