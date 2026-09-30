#!/usr/bin/env node
/**
 * generate-code-viewer.js: one JSON file per sample for the docs code viewer.
 *
 * Replaces `gulp updateCodeViewer`. The output schema and URL are unchanged,
 * because the docs site and its StackBlitz `sdk.openProject()` flow read them:
 *
 *   public/code-viewer/<group>/<component>/<name>.json
 *   → <base>/code-viewer/grids/grid/overview.json
 *
 * File order inside `sampleFiles`:
 *   1. src/index.tsx
 *   2. src/*.css|scss|json, by name
 *   3. src/*.ts|tsx data and helper files, by name
 *   4. index.html, tsconfig.json, vite.config.js, package.json
 *
 * Paths are project-relative ("src/index.tsx") so the files open as a
 * runnable project.
 */
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, findSamples } from './lib/samples.js';

const OUTPUT_ROOT = path.join(REPO_ROOT, 'public', 'code-viewer');
const MAIN_FILE = 'index.tsx';
const DATA_HEADER = 'DATA';

// Docs always show public package names, e.g. '@infragistics/igniteui-react' → 'igniteui-react'.
const SCOPED_RE = /@infragistics\/(igniteui)/g;

/** Project files appended after the sources, as [path, extension]. */
const BOILERPLATE = [
  ['index.html', 'html'],
  ['tsconfig.json', 'json'],
  ['vite.config.js', 'js'],
  ['package.json', 'json'],
];

/** How each src/ extension is presented. Anything else is left out. */
const SOURCE_KINDS = {
  '.css': { ext: 'css', header: 'css', isMain: true, group: 'source' },
  '.scss': { ext: 'scss', header: 'scss', isMain: true, group: 'source' },
  '.json': { ext: 'json', header: 'json', isMain: false, group: 'source' },
  '.ts': { ext: 'ts', header: DATA_HEADER, isMain: true, group: 'data' },
  '.tsx': { ext: 'ts', header: DATA_HEADER, isMain: true, group: 'data' },
};

/** One code-viewer entry. Key order matches the gulp output. */
function entry(filePath, content, ext, header, isMain) {
  return {
    hasRelativeAssetsUrls: false,
    isMain,
    fileExtension: ext,
    fileHeader: header,
    path: filePath,
    content: content.replace(SCOPED_RE, '$1'),
  };
}

/** src/ files, grouped and in output order. */
async function sourceEntries(srcDir) {
  const names = (await fsp.readdir(srcDir)).sort();
  const groups = { source: [], data: [] };

  for (const name of names) {
    const kind = SOURCE_KINDS[path.extname(name)];
    if (!kind || name === MAIN_FILE) {
      continue;
    }

    const content = await fsp.readFile(path.join(srcDir, name), 'utf8');
    groups[kind.group].push(entry(`src/${name}`, content, kind.ext, kind.header, kind.isMain));
  }

  return [...groups.source, ...groups.data];
}

async function collect(dir) {
  const srcDir = path.join(dir, 'src');
  const main = await fsp.readFile(path.join(srcDir, MAIN_FILE), 'utf8');
  const files = [entry(`src/${MAIN_FILE}`, main, 'tsx', 'tsx', true), ...(await sourceEntries(srcDir))];

  for (const [file, ext] of BOILERPLATE) {
    const full = path.join(dir, file);
    if (!existsSync(full)) {
      continue;
    }
    files.push(entry(file, await fsp.readFile(full, 'utf8'), ext, ext, false));
  }

  return files;
}

async function write(sample) {
  const sampleFiles = await collect(sample.dir);
  const out = path.join(OUTPUT_ROOT, `${sample.slug}.json`);

  await fsp.mkdir(path.dirname(out), { recursive: true });
  await fsp.writeFile(out, JSON.stringify({ sampleFiles }, null, ' '));
}

async function run() {
  await fsp.rm(OUTPUT_ROOT, { recursive: true, force: true });

  const samples = await findSamples();
  const results = await Promise.allSettled(samples.map(write));

  // Report failures by slug; a missing src/index.tsx is the usual cause.
  const failed = results
    .map((r, i) => ({ r, slug: samples[i].slug }))
    .filter(({ r }) => r.status === 'rejected');
  for (const { r, slug } of failed) {
    console.error(`  ERR  ${slug}: ${r.reason.message}`);
  }

  console.log(`Generated ${samples.length - failed.length} code-viewer file(s) in ${path.relative(REPO_ROOT, OUTPUT_ROOT)}/`);
  if (failed.length) {
    process.exit(1);
  }
}

run();
