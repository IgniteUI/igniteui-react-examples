import { test, expect } from '@playwright/test';

import { at, collectErrors, sampleReady } from './support';

/**
 * Sample pages against the production build.
 *
 * Guards the regressions this setup is built to prevent: a sample chunk
 * hosting shared library code (another page then evaluates that sample's
 * module), sample CSS leaking onto other pages, and a sample rendering twice
 * because its own createRoot() survived the build.
 *
 * The set spans every chunk-sharing package group, plus the special cases:
 * a web worker, SCSS, Tailwind, and CSS imported by a non-entry file.
 */
const SAMPLE_SLUGS = [
  'charts/category-chart/annotations-all',
  'charts/category-chart/axis-options',
  'charts/financial-chart/overview',
  'grids/grid/overview',
  'grids/hierarchical-grid/overview',
  'grids/grid-lite/styling-config-themes',
  'excel/spreadsheet/overview',
  'inputs/input/overview',
  'inputs/badge/tailwind-styling',
  'interactions/chat/overview',
  'layouts/dock-manager/overview',
  'maps/geo-map/binding-data-model',
  'maps/geo-map/display-heat-imagery',
  'maps/geo-map/type-scatter-area-series',
];

// Sample chunks are emitted under _astro/samples/, named group--component--name.
const SAMPLE_ASSET_RE = /\/_astro\/samples\//;

for (const slug of SAMPLE_SLUGS) {
  test(`sample ${slug} renders without errors`, async ({ page }) => {
    const errors = collectErrors(page);

    await page.goto(at(`/${slug}`));
    await sampleReady(page);

    // The loader mounts the sample's default export into #root.
    await expect(page.locator('#root > *').first()).toBeVisible({ timeout: 30_000 });

    // Give async sample init a moment to surface runtime errors.
    await page.waitForTimeout(1_000);
    expect(errors).toEqual([]);

    // No sample chunk may ship a stylesheet: every sample's CSS is either in
    // <head> or inlined into its own chunk. A CSS asset under _astro/samples/
    // is linked into every sample page, not just its own.
    const sampleCss = await page.evaluate(
      re => [...document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')]
        .map(link => link.href)
        .filter(href => new RegExp(re).test(href)),
      SAMPLE_ASSET_RE.source,
    );
    expect(sampleCss).toEqual([]);
  });
}

test('sample chunk carries no mount of its own', async ({ page }) => {
  // stripSampleMount removes the standalone createRoot()/render(); if it
  // stopped matching, the sample would render twice into #root.
  const chunks: string[] = [];
  page.on('response', res => {
    if (SAMPLE_ASSET_RE.test(res.url()) && res.url().endsWith('.js')) {
      chunks.push(res.url());
    }
  });

  await page.goto(at('/grids/grid/overview'));
  await sampleReady(page);
  expect(chunks.length).toBeGreaterThan(0);

  for (const url of chunks) {
    const code = await (await page.request.get(url)).text();
    expect(code.includes('createRoot'), `${url} still mounts itself`).toBe(false);
  }
});

test('sample styles are in head before sample JS runs', async ({ page }) => {
  // Block every sample chunk: the page must still be styled at first paint,
  // with the theme as a <link data-ig-theme> and the sample CSS as <style>.
  await page.route(SAMPLE_ASSET_RE, route => route.abort());
  await page.goto(at('/inputs/button/overview'));

  await expect(page.locator('head link[data-ig-theme]')).toHaveCount(1);
  await expect(page.locator('head style')).not.toHaveCount(0);
});

test('a missing app asset fails the page', async ({ page }) => {
  // Resource failures are ignored only for external hosts (fonts, tiles). A
  // 404 for one of our own assets must surface, or the suite passes with a
  // broken build.
  const errors = collectErrors(page);
  await page.route('**/ig-themes/**', route => route.fulfill({ status: 404 }));

  await page.goto(at('/grids/grid/overview'));
  await sampleReady(page);

  expect(errors.some(e => /ig-themes/.test(e))).toBe(true);
});
