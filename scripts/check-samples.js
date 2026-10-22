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
 * Any type error fails the check. Samples in lib/unpublished.json are
 * skipped, as they are everywhere else.
 */
import path from 'node:path';
import ts from 'typescript';

import { REPO_ROOT, UNPUBLISHED } from './lib/samples.js';

const CONFIG = path.join(REPO_ROOT, 'tsconfig.samples.json');

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

  const diagnostics = ts.getPreEmitDiagnostics(program);
  const failing = [...new Set(diagnostics.map(d => d.file && slugOf(d.file.fileName)).filter(Boolean))].sort();

  if (diagnostics.length) {
    report(diagnostics);
  }

  console.log(`Type-checked ${checked.size} sample(s).`);

  if (failing.length) {
    console.error(`\n${failing.length} sample(s) have type errors:`);
    failing.forEach(slug => console.error(`  ${slug}`));
  }
  if (diagnostics.length) {
    process.exit(1);
  }
}

run();
