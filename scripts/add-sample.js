#!/usr/bin/env node
/**
 * add-sample.js: scaffold a new sample.
 *
 * Usage: npm run add:sample <group>/<component>/<name>
 *   e.g. npm run add:sample inputs/button/new-thing
 *
 * Refuses to touch an existing folder.
 */
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

import { SAMPLES_ROOT } from './lib/samples.js';
import { TEMPLATES } from './lib/templates.js';

// group/component/name, each kebab-case.
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*(\/[a-z0-9]+(-[a-z0-9]+)*){2}$/;

function fail(message) {
  console.error(message);
  process.exit(1);
}

const toWords = s => s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1));

/** Names the templates need, e.g. "inputs/button/new-thing" → title "Button New Thing". */
function toNames(slug) {
  const [, component, name] = slug.split('/');

  return {
    slug,
    title: [...toWords(component), ...toWords(name)].join(' '),
    component: [...toWords(component), ...toWords(name)].join(''),
    pkgName: `react-${component}-${name}`,
  };
}

async function run() {
  const slug = process.argv[2];
  if (!slug || !SLUG_RE.test(slug)) {
    fail('Usage: npm run add:sample <group>/<component>/<name>\n  e.g. npm run add:sample inputs/button/new-thing');
  }

  const dir = path.join(SAMPLES_ROOT, slug);
  if (existsSync(dir)) {
    fail(`samples/${slug} already exists`);
  }

  const names = toNames(slug);
  for (const [file, template] of Object.entries(TEMPLATES)) {
    const full = path.join(dir, file);
    await fsp.mkdir(path.dirname(full), { recursive: true });
    await fsp.writeFile(full, template(names));
  }

  console.log(`Created samples/${slug}`);
}

run();
