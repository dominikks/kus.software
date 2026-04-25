<header class="profile">
  <div class="profile-picture-container">
    <img alt="Profile photograph" src="/profile.jpg" />
  </div>

  <h1 class="profile-name">Dominik Kus</h1>
  <p class="profile-description">
    I am a <span class="bold">Software Consultant</span> and Computer Scientist based in Germany.
  </p>

  <div class="socials">
    <a
      href="https://www.linkedin.com/in/dominik-kus-08a772252"
      rel="noopener noreferrer"
      target="_blank">LINKEDIN</a
    >
    <a href="https://github.com/dominikks" rel="noopener noreferrer" target="_blank">GITHUB</a>
    <a href="https://orcid.org/0000-0002-9375-9643" rel="noopener noreferrer" target="_blank"
      >ORCID</a
    >
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
    padding-top: var(--space-16);
  }

  .profile-picture-container {
    padding: var(--space-1);
    border: 1px solid var(--border);
    border-radius: 50%;
    margin-bottom: var(--space-4);

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
    margin: 0 0 var(--space-4) 0;
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
    gap: var(--space-6);
    margin-top: var(--space-6);

    a {
      @include text-meta(14px, 500);
      @include link-muted();
    }
  }

  .bold {
    font-weight: 600;
  }
</style>
