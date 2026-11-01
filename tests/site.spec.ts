import { readdirSync, readFileSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';

const articles = readdirSync('src/routes/blog', { recursive: true })
  .filter((file): file is string => typeof file === 'string' && /\/\+page\.(svx|md)$/.test(file))
  .map((file) => ({
    path: `/blog/${file.replace(/\/\+page\.(svx|md)$/, '')}`,
    published: !/^published:\s*false\s*$/m.test(readFileSync(`src/routes/blog/${file}`, 'utf8')),
  }));

test.beforeEach(async ({ page }) => {
  await page.route('**://matomo.kus.software/**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }),
  );
  page.on('pageerror', (error) => {
    throw error;
  });
  page.on('console', (message) => {
    if (message.type() === 'error') {
      throw new Error(`Browser console error: ${message.text()}`);
    }
  });
});

async function checkPage(page: Page, path: string) {
  const response = await page.goto(path);
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page).not.toHaveTitle('');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    `https://kus.software${path === '/' ? '/' : path}`,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    'content',
    `https://kus.software${path === '/' ? '/' : path}`,
  );

  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0),
      )
      .toBe(true);
  }
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
    .toBe(true);
}

test('homepage, article discovery, sitemap, and legal navigation', async ({ page, request }) => {
  expect(articles.length).toBeGreaterThan(0);
  await checkPage(page, '/');
  await expect(page.getByRole('heading', { name: 'Dominik Kus', exact: true })).toBeVisible();
  const publishedPaths = articles
    .filter((article) => article.published)
    .map((article) => article.path);
  const links = await page
    .locator('a.article')
    .evaluateAll((elements) => elements.map((element) => element.getAttribute('href')));
  expect(links.sort()).toEqual(publishedPaths.sort());

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()['content-type']).toContain('xml');
  const paths = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname,
  );
  expect(paths.sort()).toEqual(['/', ...publishedPaths].sort());
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain('https://kus.software/sitemap.xml');

  await page.getByRole('link', { name: 'Imprint', exact: true }).click();
  await expect(page).toHaveURL(/\/imprint$/);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
});

for (const article of articles) {
  test(`article ${article.path}`, async ({ page }) => {
    await checkPage(page, article.path);
    await expect(page.locator('article')).toBeVisible();
    expect((await page.locator('article').innerText()).length).toBeGreaterThan(100);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
    if (!article.published) {
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
    }
    await page.getByRole('link', { name: 'INDEX', exact: true }).click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'Dominik Kus', exact: true })).toBeVisible();
    if (article.published) {
      await page.locator(`a.article[href="${article.path}"]`).click();
      await expect(page).toHaveURL(article.path);
      await expect(page.locator('article h1')).toBeVisible();
    }
  });
}
