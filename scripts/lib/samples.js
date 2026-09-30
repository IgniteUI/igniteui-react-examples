/**
 * Sample discovery shared by the repo scripts.
 *
 * A sample is a directory exactly three levels below samples/ that holds a
 * package.json:
 *
 *   samples/<group>/<component>/<name>/package.json
 *   e.g. samples/grids/grid/overview → slug "grids/grid/overview"
 */
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const SAMPLES_ROOT = path.join(REPO_ROOT, 'samples');

const SLUG_DEPTH = 3;
const SKIP_DIRS = new Set(['node_modules']);

/** Sorted child directory names, without node_modules. */
async function subdirs(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });

  return entries
    .filter(e => e.isDirectory() && !SKIP_DIRS.has(e.name))
    .map(e => e.name)
    .sort();
}

/**
 * Every sample, sorted by slug.
 * @returns {Promise<{ slug: string, dir: string }[]>}
 */
export async function findSamples() {
  // Walk level by level instead of a recursive readdir, so installed
  // node_modules inside a sample (hundreds of MB) are never traversed.
  let slugs = [''];
  for (let depth = 0; depth < SLUG_DEPTH; depth++) {
    const levels = await Promise.all(
      slugs.map(async slug => {
        const names = await subdirs(path.join(SAMPLES_ROOT, slug));
        return names.map(name => (slug ? `${slug}/${name}` : name));
      }),
    );
    slugs = levels.flat();
  }

  return slugs
    .map(slug => ({ slug, dir: path.join(SAMPLES_ROOT, slug) }))
    .filter(s => existsSync(path.join(s.dir, 'package.json')));
}
