<script lang="ts">
  import BlogSection from '$lib/components/BlogSection.svelte';
  import ProfileSection from '$lib/components/ProfileSection.svelte';
  import type { PageData } from './$types';
  import Footer from '$lib/components/Footer.svelte';

  export let data: PageData;
</script>

<main class="container">
  <ProfileSection />
  <hr />
  <BlogSection posts={data.posts} />
</main>

<Footer />
