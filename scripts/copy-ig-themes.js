#!/usr/bin/env node
/**
 * copy-ig-themes.js: copy Ignite UI theme sheets into public/ig-themes/.
 *
 * Sample pages link their theme from <head> instead of importing it from the
 * sample module. A static sheet blocks first paint (no unstyled flash), is
 * cached once for every page, and can be re-pointed by the docs theming
 * widget by changing one href.
 *
 *   public/ig-themes/webcomponents/{light,dark}/{material,bootstrap,fluent,indigo}.css
 *   public/ig-themes/grids/{light,dark}/{material,bootstrap,fluent,indigo}.css
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

import { REPO_ROOT } from './lib/samples.js';

const OUTPUT_ROOT = path.join(REPO_ROOT, 'public', 'ig-themes');
const VARIANTS = ['light', 'dark'];

/** Output folder → [package, folder inside it that holds {light,dark}/]. */
const SOURCES = {
  webcomponents: ['igniteui-webcomponents', 'themes'],
  grids: ['igniteui-react-grids', 'grids/themes'],
};

/** Installed package directory: trial name first, then the licensed build. */
function pkgDir(pkg) {
  const candidates = [pkg, `@infragistics/${pkg}`].map(p => path.join(REPO_ROOT, 'node_modules', p));
  return candidates.find(existsSync) ?? null;
}

rmSync(OUTPUT_ROOT, { recursive: true, force: true });

let copied = 0;
for (const [key, [pkg, subdir]] of Object.entries(SOURCES)) {
  const dir = pkgDir(pkg);
  if (!dir) {
    console.warn(`[copy-ig-themes] ${pkg} not installed, skipping`);
    continue;
  }

  for (const variant of VARIANTS) {
    const from = path.join(dir, subdir, variant);
    if (!existsSync(from)) {
      continue;
    }

    const to = path.join(OUTPUT_ROOT, key, variant);
    mkdirSync(to, { recursive: true });

    for (const file of readdirSync(from).filter(f => f.endsWith('.css'))) {
      copyFileSync(path.join(from, file), path.join(to, file));
      copied++;
    }
  }
}

console.log(`[copy-ig-themes] copied ${copied} stylesheet(s) to public/ig-themes/`);
