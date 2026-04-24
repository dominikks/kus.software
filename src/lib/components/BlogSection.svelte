<script lang="ts">
  import { resolve } from '$app/paths';
  import type { BlogPost } from '$lib/blog';

  export let posts: BlogPost[];

  const dateFormatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
</script>

<section class="blog">
  <h2>Blog</h2>
  <ul>
    {#each posts as post (post.url)}
      <li>
        <a href={resolve(post.url)}>{post.title}</a>
        <p>{post.description}</p>
        <time datetime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .blog {
    margin-top: 32px;
  }

  h2 {
    color: var(--primary-color);
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  ul {
    display: grid;
    gap: 20px;
    list-style: none;
    padding: 0;
  }

  li {
    display: grid;
    gap: 4px;
  }

  a {
    font-size: 22px;
    font-weight: 500;
    width: fit-content;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  time {
    color: color-mix(in srgb, var(--text-color) 70%, white);
    font-size: 16px;
  }
</style>
