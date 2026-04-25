<script lang="ts">
  import { page } from '$app/state';

  import 'ress/ress.css';
  import '$lib/style/global.scss';
</script>

<svelte:head>
  <title>{page.data.seo.title}</title>
  <meta name="description" content={page.data.seo.description} />
  <link rel="canonical" href={page.data.seo.canonical} />

  <meta property="og:site_name" content={page.data.siteName} />
  <meta property="og:type" content={page.data.seo.openGraph.type} />
  <meta property="og:title" content={page.data.seo.openGraph.title} />
  <meta property="og:description" content={page.data.seo.openGraph.description} />
  <meta property="og:url" content={page.data.seo.openGraph.url} />
  {#if page.data.seo.openGraph.image}
    <meta property="og:image" content={page.data.seo.openGraph.image} />
  {/if}

  {#if page.data.seo.openGraph.publishedTime}
    <meta property="article:published_time" content={page.data.seo.openGraph.publishedTime} />
  {/if}
  {#if page.data.seo.openGraph.modifiedTime}
    <meta property="article:modified_time" content={page.data.seo.openGraph.modifiedTime} />
  {/if}

  <meta name="twitter:card" content={page.data.seo.twitterCard} />
  <meta name="twitter:title" content={page.data.seo.openGraph.title} />
  <meta name="twitter:description" content={page.data.seo.openGraph.description} />
  {#if page.data.seo.openGraph.image}
    <meta name="twitter:image" content={page.data.seo.openGraph.image} />
  {/if}

  {#if page.data.seo.noindex}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

<slot />
