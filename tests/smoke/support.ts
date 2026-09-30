/// <reference types="node" />
import type { ConsoleMessage, Page } from '@playwright/test';

/** Site base path the build under test was made with, e.g. '' or '/react-demos'. */
const BASE_PATH = process.env.BASE_PATH ?? '';

/** Site-relative path → server path, e.g. at('/grids/grid/overview'). */
export function at(path: string): string {
  return `${BASE_PATH}${path}`;
}

// External resources (fonts, tiles, shared CSS) may be unreachable in CI;
// their fetch failures are not app regressions. Same-origin ones are.
const RESOURCE_FAILURE = [/Failed to load resource/, /net::ERR_/];

function isExternalFailure(msg: ConsoleMessage, page: Page): boolean {
  if (!RESOURCE_FAILURE.some(re => re.test(msg.text()))) {
    return false;
  }

  const url = msg.location().url;
  return !!url && new URL(url).origin !== new URL(page.url()).origin;
}

/** Collects page errors, console errors and sample-loader warnings as they happen. */
export function collectErrors(page: Page): string[] {
  const errors: string[] = [];

  page.on('pageerror', err => {
    errors.push(`pageerror: ${err.message}`);
  });

  page.on('console', msg => {
    const text = msg.text();

    // The [...slug].astro loader logs these when a sample cannot be mounted.
    if (text.includes('[astro]')) {
      errors.push(`loader: ${text}`);
      return;
    }

    if (msg.type() === 'error' && !isExternalFailure(msg, page)) {
      // Resource failures name the URL only in location, not in the text.
      errors.push(`console.error: ${text} ${msg.location().url}`.trim());
    }
  });

  return errors;
}

/** Resolves once the sample loader has finished, successfully or not. */
export async function sampleReady(page: Page): Promise<void> {
  await page.waitForFunction(() => document.documentElement.hasAttribute('data-sample-ready'), null, {
    timeout: 30_000,
  });
}
