# [kus.software](https://kus.software)

My personal homepage

## Validation

```sh
npm ci
npx playwright install --with-deps chromium
npm run lint
npm run check
npm run build
npm test
```

Playwright serves the `build/` Pages artifact and checks the homepage, automatically discovered articles, images, navigation, metadata, sitemap, and imprint on desktop and mobile.
CI retains reports, screenshots, and traces on failure.

## Deployment

Pull requests run lint, type checks, the production build, and browser tests.
Successful main-branch builds deploy to GitHub Pages.

## Automatic dependency maintenance

Dependabot checks npm dependencies and GitHub Actions weekly.
The Dependabot auto-merge workflow requests native GitHub squash merging for successfully validated updates, including major versions.
It verifies the PR author, repository, validated commit, and required branch checks.
GitHub enforces branch rules when merging.

Required repository configuration:

- Enable auto-merge and squash merging.
- Require the GitHub Actions `build` check and up-to-date branches in the active `main` ruleset.
- Configure review requirements to permit unattended Dependabot merges.
- Set Actions secret `DEPENDABOT_MERGE_TOKEN` to a fine-grained personal access token scoped to this repository with Contents and Pull requests read/write permissions.
  This token allows merged commits to trigger deployment; manage its expiration and rotation.

To pause new merge requests, select **Actions → Dependabot auto-merge → Disable workflow**.
To cancel a pending PR auto-merge, use **Disable auto-merge** in that PR's merge box.
