# [kus.software](https://kus.software)

My personal homepage

## Validation

Run `npm ci`, `npx playwright install --with-deps chromium`, `npm run lint`, `npm run check`, `npm run build`, and `npm test`.
The browser tests serve the exact `build/` Pages artifact on desktop and mobile, rather than Svelte's intermediate preview output.
They discover articles from the source tree automatically, so adding an article does not require writing another test.
Checks cover article rendering, images, navigation, metadata, sitemap membership, the homepage, and the imprint page.
CI retains reports, screenshots, and traces on failure.
Tests stub the external Matomo tracker to avoid recording test visits or depending on analytics availability.

## Automatic dependency maintenance

Dependabot checks npm dependencies and GitHub Actions weekly.
All update levels, including major updates, are eligible for automatic squash merging after validation.
There is no automatic approval or branch-rule bypass.

Auto-merge is disabled until repository variable `DEPENDABOT_AUTOMERGE_ENABLED` is set to `true`.
Before enabling it, update the active `main` ruleset to require the `build` status check from GitHub Actions and require branches to be up to date.
Add repository Actions secret `DEPENDABOT_MERGE_TOKEN`: a fine-grained personal access token scoped only to this repository, with Contents and Pull requests read/write permissions.
Unlike the built-in `GITHUB_TOKEN`, this token allows the merge's push event to trigger the deployment workflow.
Manage its expiration and rotation, and do not grant it branch-rule bypass permissions.
Keep required human approvals off for unattended Dependabot updates, keep repository auto-merge enabled, and allow squash merges.
The merge workflow refuses to proceed without the required-check and up-to-date rules.
Test this setup on a Dependabot PR before enabling it broadly.
Existing PRs need a fresh validation run after this infrastructure lands.

The privileged merge workflow runs only after successful PR validation, never checks out PR code, verifies the Dependabot author and same-repository branch, and matches the validated head commit.
GitHub enforces the required checks again when merging.
Tests and builds use read-only repository permissions; only the main-branch deployment job receives Pages permissions.
The merge token is available only to the trusted merge job.
Successful main-branch builds deploy to GitHub Pages as before.
Dependency updates can still change behavior that these checks do not cover.

Failed updates remain open and do not merge.
Enable GitHub Actions failure notifications to receive failures.
This setup does not repair failures, verify the live deployment, or roll back automatically.
Copilot cloud Automations currently require a private or internal repository, so unattended AI repairs are not provisioned for this public repository.
Incompatible upstream upgrades may need to wait for compatible releases rather than forcing installation or weakening checks.
The Node.js runtime remains on version 24, with matching `@types/node` major updates excluded as before.
