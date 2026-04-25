<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<footer>
  <div class="footer-content">
    <p>© 2026 Dominik Kus.</p>
    <a href={resolve('/imprint')}>Imprint</a>
  </div>
</footer>

<style lang="scss">
  footer {
    border-top: 1px solid var(--border);
    padding: 24px 0;
  }

  .footer-content {
    width: 100%;
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: var(--text-muted);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
  }

  a {
    color: var(--text-muted);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:hover {
      color: var(--text-main);
    }
  }
</style>
