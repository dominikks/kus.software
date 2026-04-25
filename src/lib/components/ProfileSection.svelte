<header class="profile">
  <div class="profile-picture-container">
    <img alt="Profile photograph" src="/profile.jpg" />
  </div>

  <h1 class="profile-name">Dominik Kus</h1>
  <p class="profile-description">
    I am a <span class="bold">Software Consultant</span> and Computer Scientist based in Germany.
  </p>

  <div class="socials">
    <a href="https://twitter.com/dominikks" rel="noopener noreferrer" target="_blank">TWITTER</a>
    <a
      href="https://www.linkedin.com/in/dominik-kus-08a772252"
      rel="noopener noreferrer"
      target="_blank">LINKEDIN</a
    >
    <a href="https://github.com/dominikks" rel="noopener noreferrer" target="_blank">GITHUB</a>
    <a href="mailto:dominik@kus.software" rel="noopener noreferrer">EMAIL</a>
  </div>
</header>

<style lang="scss">
  @use '$lib/style/variables' as *;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 64px;
  }

  .profile-picture-container {
    padding: 4px;
    border: 1px solid var(--border);
    border-radius: 50%;
    margin-bottom: 16px;

    img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }
  }

  .profile-name {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin: 0 0 16px 0;
    line-height: 1.1;
  }

  .profile-description {
    font-size: 18px;
    color: var(--text-muted);
    max-width: 480px;
    margin: 0;
  }

  .socials {
    display: flex;
    gap: 24px;
    margin-top: 24px;

    a {
      @include text-meta(14px, 500);
      @include link-muted();
    }
  }

  .bold {
    font-weight: 600;
  }
</style>
