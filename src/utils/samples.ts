/**
 * samples.ts — pure build-time helper utilities
 *
 * IMPORTANT: This file contains NO import.meta.glob calls.
 * All globs live in the .astro files where Astro's Vite plugin handles them.
 * This file only exports pure, stateless functions and types.
 */

import unpublished from '../../scripts/lib/unpublished.json';

/** Slugs left out of the browser; see scripts/lib/unpublished.json. */
const UNPUBLISHED = new Set(unpublished.samples);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SampleInfo {
  /** e.g. "grids/grid/overview" */
  slug: string;
  /** e.g. "grids" */
  group: string;
  /** e.g. "grid" */
  component: string;
  /** e.g. "overview" */
  name: string;
  /** Humanised name, e.g. "Overview" */
  displayName: string;
  /** Humanised component name, e.g. "Grid" */
  componentName: string;
  /** Humanised group name, e.g. "Grids" */
  groupName: string;
}

export interface NavGroup {
  id: string;
  displayName: string;
  components: NavComponent[];
}

export interface NavComponent {
  id: string;
  displayName: string;
  samples: NavSample[];
}

export interface NavSample {
  name: string;
  displayName: string;
  slug: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert a kebab-case folder name to Title Case, e.g. "overview" → "Overview" */
export function toTitleCase(str: string): string {
  return str
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ---------------------------------------------------------------------------
// Slug / path utilities
// ---------------------------------------------------------------------------

/** Glob key → slug, e.g. "../../../../samples/grids/grid/overview/package.json" → "grids/grid/overview" */
export function keyToSlug(key: string, prefix: string, suffix: string): string | null {
  if (!key.startsWith(prefix) || !key.endsWith(suffix)) {
    return null;
  }
  return key.slice(prefix.length, key.length - suffix.length);
}

/** Prefix/suffix of the package.json glob keys used to enumerate samples. */
const GLOB_PREFIX = '../../samples/';
const GLOB_SUFFIX = '/package.json';

/** Depth of a valid sample slug: group/component/name */
const SLUG_DEPTH = 3;

/**
 * Turn the keys of the samples package.json glob (see GLOB_PREFIX/GLOB_SUFFIX)
 * into a sorted SampleInfo list, dropping nested node_modules and anything
 * not exactly group/component/name deep.
 *
 * The glob itself must stay literal in each .astro file (Vite requirement);
 * only the key processing is shared here.
 */
export function samplesFromGlobKeys(keys: string[]): SampleInfo[] {
  return keys
    .sort()
    .flatMap(key => {
      const slug = keyToSlug(key, GLOB_PREFIX, GLOB_SUFFIX);
      if (!slug || slug.includes('node_modules') || slug.split('/').length !== SLUG_DEPTH || UNPUBLISHED.has(slug)) {
        return [];
      }
      const info = slugToInfo(slug);
      return info ? [info] : [];
    });
}

/**
 * Derive SampleInfo from a slug.
 * slug must be in the form "group/component/name".
 */
export function slugToInfo(slug: string): SampleInfo | null {
  const parts = slug.split('/');
  if (parts.length !== 3) {
    return null;
  }
  const [group, component, name] = parts;
  return {
    slug,
    group,
    component,
    name,
    displayName:   toTitleCase(name),
    componentName: toTitleCase(component),
    groupName:     toTitleCase(group),
  };
}

// ---------------------------------------------------------------------------
// Sample stylesheet resolution
// ---------------------------------------------------------------------------

/**
 * A stylesheet a sample entry module pulls in, resolved to how the page should
 * put it in <head>.
 *
 * - `link`  → an Ignite UI theme, served from public/ig-themes/ (cached across
 *             every sample page, and re-pointable by the docs theming widget).
 * - `glob`  → a sample-local file, whose compiled text the page inlines.
 */
export type SampleStyle =
  | { kind: 'link'; href: string; pkg: 'webcomponents' | 'grids'; variant: string; theme: string }
  | { kind: 'glob'; key: string };

/** `import 'x.css';` / `import "./y.scss";` — the same shape the build plugin strips. */
export const CSS_IMPORT_RE = /^import\s+['"]([^'"]+\.(?:css|scss))['"];?[ \t]*(?:\/\/.*)?$/gm;

/** Bare theme specifiers, e.g. `igniteui-react-grids/grids/themes/light/material.css` */
const THEME_SPEC_RE =
  /^igniteui-(webcomponents|react-grids\/grids)\/themes\/(light|dark)\/(material|bootstrap|fluent|indigo)\.css$/;

/**
 * Read a sample entry module's source and return, in source order, every
 * stylesheet it imports.
 *
 * Order matters: it is the cascade order, so the page must emit these into
 * <head> exactly as they appear here.
 *
 * @param source  raw text of the sample's src/index.tsx
 * @param slug    e.g. "inputs/button-group/overview"
 * @param base    site base path, '' or e.g. '/react-demos'
 */
export function resolveSampleStyles(source: string, slug: string, base: string): SampleStyle[] {
  const styles: SampleStyle[] = [];
  CSS_IMPORT_RE.lastIndex = 0;

  for (const match of source.matchAll(CSS_IMPORT_RE)) {
    const spec = match[1];

    const theme = THEME_SPEC_RE.exec(spec);
    if (theme) {
      const pkg = theme[1] === 'webcomponents' ? 'webcomponents' : 'grids';
      styles.push({
        kind: 'link',
        href: `${base}/ig-themes/${pkg}/${theme[2]}/${theme[3]}.css`,
        pkg,
        variant: theme[2],
        theme: theme[3],
      });
      continue;
    }

    // Relative to the sample's src/ directory. Every sample-local stylesheet
    // sits next to index.tsx, so `./name.css` is the only relative shape used.
    if (spec.startsWith('./')) {
      styles.push({ kind: 'glob', key: `../../samples/${slug}/src/${spec.slice(2)}` });
      continue;
    }

    console.warn(`[samples] ${slug}: unrecognised stylesheet import "${spec}" — not inlined`);
  }

  return styles;
}

/** Build the three-level navigation tree from the flat sample list */
export function buildNavTree(samples: SampleInfo[]): NavGroup[] {
  const groupMap = new Map<string, NavGroup>();

  for (const s of samples) {
    if (!groupMap.has(s.group)) {
      groupMap.set(s.group, { id: s.group, displayName: s.groupName, components: [] });
    }
    const group = groupMap.get(s.group)!;

    let comp = group.components.find(c => c.id === s.component);
    if (!comp) {
      comp = { id: s.component, displayName: s.componentName, samples: [] };
      group.components.push(comp);
    }

    comp.samples.push({ name: s.name, displayName: s.displayName, slug: s.slug });
  }

  return [...groupMap.values()];
}
