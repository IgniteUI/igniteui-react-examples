/// <reference types="node" />
import { defineConfig } from '@playwright/test';

// Smoke tests run against the production build: `npm run build` first.
// Set BASE_PATH for both steps to test a sub-path deploy, e.g. /react-demos.
const PORT = 4200;
const BASE_PATH = process.env.BASE_PATH ?? '';

export default defineConfig({
  testDir: './tests/smoke',
  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  webServer: {
    // --ignore-lock keeps `astro preview` in the foreground: Astro 7 moves it
    // to the background when an AI agent runs it, and Playwright would then
    // see the command exit before the server is up.
    command: `npm run preview -- --ignore-lock`,
    url: `http://localhost:${PORT}${BASE_PATH}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
