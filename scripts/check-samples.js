#!/usr/bin/env node
/**
 * check-samples.js: type-check every published sample in one TypeScript run.
 *
 * WHY not each sample's own tsconfig
 * ──────────────────────────────────
 * Most samples resolve modules with `moduleResolution: node`, which cannot
 * see the types the IG packages publish only through `exports`. Every IG
 * component then types as `any`, so a prop the component does not have, e.g.
 * <IgrColorPicker placeholder="…">, passes unnoticed. tsconfig.samples.json
 * checks all of them with bundler resolution instead; one program over every
 * sample takes well under a minute, where ~1000 `tsc -p` runs take an hour.
 *
 * Samples listed in lib/known-type-errors.json may fail. Any other sample
 * with an error fails the check, and so does a listed sample that no longer
 * has one, so the list only shrinks.
 */
import path from 'node:path';
import ts from 'typescript';

import { REPO_ROOT, UNPUBLISHED } from './lib/samples.js';
import knownErrors from './lib/known-type-errors.json' with { type: 'json' };

const CONFIG = path.join(REPO_ROOT, 'tsconfig.samples.json');
const KNOWN_FILE = 'scripts/lib/known-type-errors.json';
const KNOWN = new Set(Object.keys(knownErrors.samples));

// samples/<group>/<component>/<name>/… → <group>/<component>/<name>
const SLUG_RE = /^samples\/([^/]+\/[^/]+\/[^/]+)\//;

/** The sample slug a file belongs to, or undefined outside samples/. */
function slugOf(fileName) {
  const rel = path.relative(REPO_ROOT, fileName).replace(/\\/g, '/');
  return rel.match(SLUG_RE)?.[1];
}

const formatHost = {
  getCanonicalFileName: f => f,
  getCurrentDirectory: () => REPO_ROOT,
  getNewLine: () => '\n',
};
// Pretty output in a terminal, one line per error in CI logs (as tsc does).
const format = process.stdout.isTTY ? ts.formatDiagnosticsWithColorAndContext : ts.formatDiagnostics;

function report(diagnostics) {
  console.error(format(diagnostics, formatHost));
}

function run() {
  const { config, error } = ts.readConfigFile(CONFIG, ts.sys.readFile);
  if (error) {
    report([error]);
    process.exit(1);
  }

  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, REPO_ROOT, undefined, CONFIG);
  if (parsed.errors.length) {
    report(parsed.errors);
    process.exit(1);
  }

  const fileNames = parsed.fileNames.filter(f => !UNPUBLISHED.has(slugOf(f)));
  const checked = new Set(fileNames.map(slugOf).filter(Boolean));
  const program = ts.createProgram(fileNames, parsed.options);

  // Errors by sample; anything else (config, globals) is never allowed.
  const bySlug = new Map();
  const other = [];
  for (const d of ts.getPreEmitDiagnostics(program)) {
    const slug = d.file && slugOf(d.file.fileName);
    if (!slug) {
      other.push(d);
      continue;
    }
    if (!bySlug.has(slug)) {
      bySlug.set(slug, []);
    }
    bySlug.get(slug).push(d);
  }

  const failing = [...bySlug.keys()].filter(slug => !KNOWN.has(slug)).sort();
  const stale = [...KNOWN].filter(slug => !bySlug.has(slug)).sort();

  if (other.length) {
    report(other);
  }
  for (const slug of failing) {
    report(bySlug.get(slug));
  }

  console.log(`Type-checked ${checked.size} sample(s); ${bySlug.size - failing.length} known to fail (${KNOWN_FILE}).`);

  if (failing.length) {
    console.error(`\n${failing.length} sample(s) have type errors:`);
    failing.forEach(slug => console.error(`  ${slug}`));
  }
  if (stale.length) {
    console.error(`\n${stale.length} sample(s) in ${KNOWN_FILE} no longer fail; remove them from the list:`);
    stale.forEach(slug => console.error(`  ${slug}`));
  }
  if (other.length || failing.length || stale.length) {
    process.exit(1);
  }
}

run();
