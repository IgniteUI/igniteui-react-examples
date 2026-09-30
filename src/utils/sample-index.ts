/**
 * sample-index.ts — the build-time list of every sample.
 *
 * One glob, shared by every page that enumerates samples. Glob keys are
 * relative to this file ("../../samples/<slug>/package.json"), so pages at any
 * depth (e.g. pages/samples/[...slug].astro) get the same keys.
 */
import { samplesFromGlobKeys, type SampleInfo } from './samples';

const pkgModules = import.meta.glob('../../samples/**/package.json', {
  eager: true,
}) as Record<string, unknown>;

export const SAMPLES: SampleInfo[] = samplesFromGlobKeys(Object.keys(pkgModules));
