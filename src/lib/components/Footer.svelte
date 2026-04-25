<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<footer>
  <div class="footer-content container">
    <p>© 2026 Dominik Kus.</p>
    <a href={resolve('/imprint')}>Imprint</a>
  </div>
</footer>

<style lang="scss">
  @use '$lib/style/variables' as *;

  footer {
    border-top: 1px solid var(--border);
    padding: 24px 0;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p {
    @include text-meta(12px, 400);
    margin: 0;
  }

  a {
    @include text-meta(12px, 400);
    @include link-muted();
  }
</style>
