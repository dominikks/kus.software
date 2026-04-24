<script lang="ts">
  import { resolve } from '$app/paths';
  import type { BlogPost } from '$lib/blog';

  export let posts: BlogPost[];

  const dateFormatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  });
</script>

<section class="blog">
  <h2>Blog Posts</h2>
  <ul class="articles">
    {#each posts as post (post.url)}
      <li>
        <a class="article" href={resolve(post.url)}>
          <div class="article-header">
            <h3>{post.title}</h3>
            <time datetime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
          </div>
          <p>{post.description}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @use '$lib/style/variables' as *;

  .blog {
    margin: 0 auto;
    text-align: left;
    margin: 48px 0;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 32px 0;
    line-height: 1.2;
  }

  .articles {
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .article {
    display: block;
    text-decoration: none;
    color: inherit;

    &:hover h3 {
      color: var(--text-muted);
    }
  }

  .article-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    gap: 16px;

    @media (min-width: $breakpoint-mobile) {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  time {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-top: 4px;

    @media (min-width: $breakpoint-mobile) {
      margin-top: 0;
    }
  }

  p {
    font-size: 16px;
    color: var(--text-muted);
    margin: 0;
    line-height: 1.6;
  }
</style>
