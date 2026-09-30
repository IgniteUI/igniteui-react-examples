import { test, expect, type Frame, type Page } from '@playwright/test';

import { at, collectErrors, sampleReady } from './support';

/**
 * The samples browser around the samples: index, sidebar, old URLs, and the
 * contract with the docs site that embeds sample pages in iframes.
 */

test('index page renders the component grid', async ({ page }) => {
  const errors = collectErrors(page);

  await page.goto(at('/'));

  await expect(page.locator('.comp-card').first()).toBeVisible();
  expect(errors).toEqual([]);
});

test('nav sidebar renders on index and survives navigation', async ({ page }) => {
  await page.goto(at('/'));
  const nav = page.locator('#nav-bar');
  await expect(page.locator('html')).toHaveClass(/with-nav/);
  await expect(nav.locator('.nav-logo img')).toBeVisible();

  // Expand the first component group and follow its first sample link.
  await nav.locator('.nav-component').first().click();
  await nav.locator('.nav-list[data-state="expanded"] a').first().click();

  // The sidebar stays visible on the sample page, with the link active.
  await expect(page.locator('html')).toHaveClass(/with-nav/);
  await expect(page.locator('#nav-bar a.active')).toHaveCount(1);
});

test('index arms the sidebar before its modules run', async ({ page }) => {
  // Serve the index without its module scripts. The component cards are
  // server-rendered and clickable at first paint, so a fast click must still
  // reach the sample with the sidebar flag set: arming it may not depend on a
  // deferred module.
  await page.route(url => url.pathname === at('/'), async route => {
    const res = await route.fetch();
    const html = (await res.text()).replace(/<script type="module"[\s\S]*?<\/script>/g, '');
    await route.fulfill({ response: res, body: html });
  });

  await page.goto(at('/'));
  await page.locator('.comp-card').first().click();

  await expect(page).not.toHaveURL(new RegExp(`${at('/')}$`));
  await expect(page.locator('html')).toHaveClass(/with-nav/);
});

test('sidebar column is reserved before nav.json arrives', async ({ page }) => {
  // Arm the visibility flag the way a real visit does.
  await page.goto(at('/'));

  // Stall nav.json: the column must be reserved at first paint regardless,
  // otherwise the async render shifts the whole page.
  await page.route('**/nav.json', () => {});
  await page.goto(at('/inputs/input/overview'));

  const width = await page.evaluate(() => document.getElementById('nav-bar')?.offsetWidth ?? 0);
  expect(width).toBeGreaterThan(0);
});

test('nav search filters components', async ({ page }) => {
  await page.goto(at('/'));
  const nav = page.locator('#nav-bar');

  await nav.locator('#nav-search-input').fill('annotations');

  await expect(nav.locator('.nav-component:not(.nav-item-hidden)').first()).toBeVisible();
  await expect(nav.locator('.nav-component.nav-item-hidden').first()).toBeAttached();
});

test('deep link shows no nav sidebar', async ({ page }) => {
  // Direct visits (and docs iframes) get no sidebar, and no nav.json fetch.
  let navJsonRequested = false;
  page.on('request', req => {
    if (req.url().endsWith('/nav.json')) {
      navJsonRequested = true;
    }
  });

  await page.goto(at('/inputs/input/overview'));
  await sampleReady(page);

  await expect(page.locator('html')).not.toHaveClass(/with-nav/);
  const width = await page.evaluate(() => document.getElementById('nav-bar')?.offsetWidth ?? 0);
  expect(width).toBe(0);
  expect(navJsonRequested).toBe(false);
});

test.describe('old URLs', () => {
  test('/samples/<slug> redirects and keeps the sidebar', async ({ page }) => {
    // README and docs links still use the previous browser's /samples/ prefix,
    // which always showed the sidebar.
    await page.goto(at('/samples/grids/grid/overview'));

    await expect(page).toHaveURL(at('/grids/grid/overview'));
    await expect(page.locator('html')).toHaveClass(/with-nav/);
  });

  test('/<group>/<component>-<name> redirects to the canonical path', async ({ page }) => {
    await page.goto(at('/maps/geo-map-binding-data-csv'));

    await expect(page).toHaveURL(at('/maps/geo-map/binding-data-csv'));
  });
});

test.describe('docs iframe', () => {
  const EMBEDDED_SLUG = '/grids/grid/overview';

  /** Loads the index (same origin, so a trusted host) with one sample iframe. */
  async function embed(page: Page, slug: string): Promise<Frame> {
    await page.goto(at('/'));
    await page.evaluate(
      src =>
        new Promise<void>(resolve => {
          const frame = document.createElement('iframe');
          frame.src = src;
          frame.style.cssText = 'width: 900px; height: 600px';
          frame.onload = () => resolve();
          document.body.append(frame);
        }),
      at(slug),
    );

    const frame = page.frames().find(f => new URL(f.url()).pathname === at(slug));
    expect(frame).toBeDefined();
    await frame!.waitForFunction(() => document.documentElement.hasAttribute('data-sample-ready'));
    return frame!;
  }

  /** Posts a docs-host message into the embedded sample. */
  async function post(page: Page, message: object): Promise<void> {
    await page.evaluate(msg => document.querySelector('iframe')!.contentWindow!.postMessage(msg, '*'), message);
  }

  test('embedded sample shows no sidebar', async ({ page }) => {
    const frame = await embed(page, EMBEDDED_SLUG);

    await expect(frame.locator('html')).not.toHaveClass(/with-nav/);
  });

  test('theme message re-points the theme sheet', async ({ page }) => {
    const frame = await embed(page, EMBEDDED_SLUG);

    await post(page, { type: 'igd-sample-theme', theme: 'material', mode: 'dark' });

    await expect(frame.locator('html')).toHaveAttribute('data-igd-theme', 'material');
    await expect(frame.locator('link[data-ig-theme]')).toHaveAttribute('href', /\/dark\/material\.css$/);
  });

  test('fitContent message reports the content height', async ({ page }) => {
    // A short sample in a tall frame: the reported height must come from the
    // content, not echo the frame's own 600px back.
    const frame = await embed(page, '/inputs/button/overview');
    await expect(frame.locator('#root > *').first()).toBeVisible();

    const reported = page.evaluate(
      () =>
        new Promise<number>(resolve => {
          window.addEventListener('message', e => {
            if (e.data?.type === 'igd-sample-height') {
              resolve(e.data.height);
            }
          });
        }),
    );
    await post(page, { type: 'igd-sample-fit' });

    const height = await reported;
    expect(height).toBeGreaterThan(0);
    expect(height).toBeLessThan(600);
  });
});
