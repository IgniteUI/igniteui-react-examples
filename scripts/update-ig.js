#!/usr/bin/env node
/**
 * update-ig.js: sync package versions across the repo.
 *
 * Replaces `gulp updateIG`. Sets every package listed in lib/versions.js to
 * its target version, in the root package.json and in every sample, and
 * sorts dependency keys.
 *
 *   root package.json   ← SHARED
 *   samples/**          ← SHARED + TOOLING
 *
 * Usage: edit lib/versions.js, then `npm run update:ig && npm install`.
 */
import fsp from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, findSamples } from './lib/samples.js';
import { SHARED, TOOLING } from './lib/versions.js';

const SECTIONS = ['dependencies', 'devDependencies', 'peerDependencies'];
const SCOPE = '@infragistics/';

/** Unscoped name → target, so trial and licensed names both match. */
function toTargets(list) {
  return new Map(list.map(p => [p.name.replace(SCOPE, ''), p]));
}

function sortKeys(obj) {
  return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)));
}

/** Applies targets to a parsed package.json in place. Returns whether it changed. */
function upgrade(pkg, targets) {
  let changed = false;

  for (const section of SECTIONS) {
    const deps = pkg[section];
    if (!deps) {
      continue;
    }

    for (const [name, version] of Object.entries(deps)) {
      const target = targets.get(name.replace(SCOPE, ''));
      if (!target || (target.name === name && target.version === version)) {
        continue;
      }

      // Re-keyed as well as re-versioned: the target may switch feeds.
      delete deps[name];
      deps[target.name] = target.version;
      changed = true;
    }

    const sorted = sortKeys(deps);
    if (JSON.stringify(sorted) !== JSON.stringify(deps)) {
      changed = true;
    }
    pkg[section] = sorted;
  }

  return changed;
}

/** Upgrades one file on disk. Returns whether it was rewritten. */
async function updateFile(file, targets) {
  const pkg = JSON.parse(await fsp.readFile(file, 'utf8'));
  if (!upgrade(pkg, targets)) {
    return false;
  }

  await fsp.writeFile(file, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`  updated: ${path.relative(REPO_ROOT, file)}`);
  return true;
}

async function run() {
  const rootTargets = toTargets(SHARED);
  const sampleTargets = toTargets([...SHARED, ...TOOLING]);

  const samples = await findSamples();
  const jobs = [
    updateFile(path.join(REPO_ROOT, 'package.json'), rootTargets),
    ...samples.map(s => updateFile(path.join(s.dir, 'package.json'), sampleTargets)),
  ];

  const results = await Promise.all(jobs);
  const updated = results.filter(Boolean).length;
  console.log(`\nUpdated ${updated} of ${jobs.length} package.json file(s).`);
}

run();
