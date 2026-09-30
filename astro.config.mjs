// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

import { findSamples } from './scripts/lib/samples.js';

// A sample's entry module, samples/<path>/src/index.tsx (captures <path>).
const SAMPLE_ENTRY_RE = /[\\/]samples[\\/](.+)[\\/]src[\\/]index\.tsx$/;
// Any script in a sample's src/, e.g. samples/<path>/src/LegendOverlay.tsx.
const SAMPLE_SOURCE_RE = /[\\/]samples[\\/].+[\\/]src[\\/][^\\/]+\.[jt]sx?$/;

/**
 * Vite plugin: strip the module-level mount from every sample src/index.tsx.
 *
 * WHY this is needed
 * ──────────────────
 * Every sample ends with
 *
 *   const root = ReactDOM.createRoot(document.getElementById('root'));
 *   root.render(<Sample/>);
 *
 * so it runs standalone. The `[...slug].astro` loader mounts the module's
 * default export itself, after the dynamic import resolves, so the page
 * controls when (and whether) a sample renders. Keeping the module-level
 * mount would render every sample twice into the same container. Stripping
 * it here (instead of editing 950+ samples, which igniteui-xplat-examples
 * generates) keeps each sample runnable standalone.
 *
 * A sample that does not match the contract fails the build: a silent miss
 * would be a double render or a blank page.
 */
/** @returns {import('vite').Plugin} */
function stripSampleMount() {
  // `const root = ReactDOM.createRoot(document.getElementById('root'));` (`!` allowed)
  const createRootRe = /^[ \t]*const\s+root\s*=\s*ReactDOM\.createRoot\(\s*document\.getElementById\(\s*['"]root['"]\s*\)\s*!?\s*\)\s*;?[ \t]*$/m;
  // `root.render(<Sample/>);`
  const renderRe = /^[ \t]*root\.render\(\s*<\w+\s*\/>\s*\)\s*;?[ \t]*$/m;
  const defaultExportRe = /^export\s+default\b/m;

  return {
    name: 'strip-sample-mount',
    enforce: /** @type {'pre'} */ ('pre'),
    transform(code, id) {
      if (!SAMPLE_ENTRY_RE.test(id)) {
        return;
      }
      if (!renderRe.test(code) || !defaultExportRe.test(code)) {
        this.error(`${id}: a sample must \`export default\` its component and end with \`root.render(<Sample/>)\``);
      }
      return { code: code.replace(createRootRe, '').replace(renderRe, ''), map: null };
    },
  };
}

/**
 * Vite plugin: take the stylesheet imports out of every sample entry module.
 *
 * WHY this is needed
 * ──────────────────
 * A sample's entry module is loaded lazily, by slug, from a dynamic import that
 * only runs after DOMContentLoaded — and it drags in megabytes of library code.
 * While that is in flight the page has already painted, so any CSS the module
 * owns arrives far too late: the sample flashes unstyled first.
 *
 * It was also a correctness problem. Rollup hoists shared code into some
 * chunk, and evaluating a chunk runs the whole module body — so a *different*
 * sample's theme import could land in the document first and win the library's
 * one-shot `getTheme()` check, rendering material samples with the bootstrap
 * theme.
 *
 * So `[...slug].astro` emits these stylesheets into <head> at build time
 * (see resolveSampleStyles): themes as <link>s to public/ig-themes/, everything
 * sample-local inlined. This plugin drops the imports it has taken over, so the
 * two can't both own the same sheet — otherwise the module's copy would
 * re-append itself last on every load and clobber a theme swap.
 *
 * Anything whose shape the page does NOT resolve is deliberately left alone and
 * still injected at runtime, so an unrecognised import degrades to the old
 * behaviour instead of silently losing its styles. The same runtime fallback
 * covers stylesheets imported by a sample's other files (e.g. LegendOverlay.tsx
 * imports LegendOverlay.css): the page only hoists the entry's own imports.
 * Left as plain imports, those would become CSS assets that Astro links into
 * EVERY sample page, because the loader's glob reaches every sample chunk.
 */
/** @returns {import('vite').Plugin} */
function inlineSampleCss() {
  // Matches any CSS / SCSS side-effect import inside a sample file (relative or
  // package), with an optional trailing comment: `import './index.css'; // …`
  const cssImportRe = /^import\s+['"]([^'"]+\.(?:css|scss))['"];?[ \t]*(?:\/\/.*)?$/gm;

  // The two shapes [...slug].astro knows how to put in <head>. Keep in sync
  // with resolveSampleStyles() in src/utils/samples.ts.
  const themeSpecRe =
    /^igniteui-(webcomponents|react-grids\/grids)\/themes\/(light|dark)\/(material|bootstrap|fluent|indigo)\.css$/;
  const sampleLocalRe = /^\.\/[^/]+\.(?:css|scss)$/;

  const handledInHead = spec => themeSpecRe.test(spec) || sampleLocalRe.test(spec);

  let isBuild = false;

  return {
    name: 'inline-sample-css',
    enforce: /** @type {'pre'} */ ('pre'),
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    transform(code, id) {
      if (!SAMPLE_SOURCE_RE.test(id)) {
        return;
      }
      const isEntry = SAMPLE_ENTRY_RE.test(id);
      cssImportRe.lastIndex = 0;
      if (!cssImportRe.test(code)) {
        return;
      }
      cssImportRe.lastIndex = 0;

      let i = 0;
      const newCode = code.replace(cssImportRe, (line, spec) => {
        // Already in <head> — drop it so nothing is styled twice.
        if (isEntry && handledInHead(spec)) {
          return '';
        }

        // In dev Vite injects CSS imports natively, which is correct per-module.
        if (!isBuild) {
          return line;
        }

        // Production fallback for shapes the page could not resolve. ?inline
        // keeps the CSS as a string inside this module, so Vite emits no shared
        // CSS chunk that could leak onto unrelated pages.
        const v = `__sampleCss${i++}`;
        return [
          `import ${v} from '${spec}?inline';`,
          `{const __s=document.createElement('style');__s.textContent=${v};document.head.appendChild(__s);}`,
        ].join('\n');
      });

      return { code: newCode, map: null };
    },
  };
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Ignite UI packages that may be installed either as unscoped trial builds
 * (e.g. `igniteui-react-grids`) or as `@infragistics/`-scoped licensed builds.
 * Used by both the resolveId plugin and the optimizeDeps.include list.
 */
const IGNITEUI_PACKAGES = [
  'igniteui-dockmanager',
  'igniteui-react',
  'igniteui-react-core',
  'igniteui-react-charts',
  'igniteui-react-dashboards',
  'igniteui-react-data-grids',
  'igniteui-react-datasources',
  'igniteui-react-dockmanager',
  'igniteui-react-excel',
  'igniteui-react-gauges',
  'igniteui-react-grids',
  'igniteui-react-inputs',
  'igniteui-react-layouts',
  'igniteui-react-maps',
  'igniteui-react-spreadsheet',
  'igniteui-react-spreadsheet-chart-adapter',
];

/**
 * Vite plugin: resolve unscoped igniteui-* package names to their @infragistics/
 * scoped equivalents when the unscoped package is not installed.
 *
 * WHY a resolveId plugin instead of resolve.alias
 * ────────────────────────────────────────────────
 * Astro merges its own Vite config last and can replace resolve.alias arrays.
 * A resolveId hook is part of the Rollup plugin pipeline and is always called
 * for every import, regardless of how Astro configures the resolver.
 */
/** @returns {import('vite').Plugin} */
function resolveIgniteUiScoped() {
  // Build a map at startup: unscoped name → scoped name, only for packages
  // that are absent from node_modules unscoped.
  /** @type {Map<string, string>} */
  const redirects = new Map();

  for (const pkg of IGNITEUI_PACKAGES) {
    if (!existsSync(path.resolve(__dirname, 'node_modules', pkg))) {
      redirects.set(pkg, `@infragistics/${pkg}`);
    }
  }

  return {
    name: 'resolve-igniteui-scoped',
    async resolveId(id, importer, options) {
      // Exact match (e.g. 'igniteui-react-grids')
      if (redirects.has(id)) {
        return this.resolve(/** @type {string} */ (redirects.get(id)), importer, { ...options, skipSelf: true });
      }
      // Subpath match (e.g. 'igniteui-react-grids/grids/combined')
      for (const [unscoped, scoped] of redirects) {
        if (id.startsWith(`${unscoped}/`)) {
          const newId = `${scoped}${id.slice(unscoped.length)}`;
          return this.resolve(newId, importer, { ...options, skipSelf: true });
        }
      }
    },
  };
}

/**
 * Vite plugin: the browser build's chunk layout — one chunk per sample and
 * one per node_modules package.
 *
 * WHY a plugin instead of build.rolldownOptions
 * ──────────────────────────────────────────────
 * The vendor group must not capture its modules' dependencies, which Rolldown
 * allows only when preserveEntrySignatures is 'allow-extension' or false.
 * Astro hard-codes 'exports-only' into the client build options; the
 * configEnvironment hook runs after that, so its override sticks. Astro's
 * client entries are page scripts that export nothing, and the option doesn't
 * apply to dynamically imported samples, so only the validation changes.
 */
/** @returns {import('vite').Plugin} */
function sampleChunking() {
  /** @type {import('vite').Rolldown.CodeSplittingGroup[]} */
  const groups = [
    {
      // Vite's dynamic-import preload helper is shared by every lazy chunk.
      // Left unassigned, the bundler hosts it inside one vendor chunk and the
      // others import it back — a chunk cycle warning.
      name: 'preload-helper',
      test: /vite\/preload-helper/,
      priority: 3,
    },
    {
      // One chunk per node_modules package. It outranks the sample group (a
      // module claimed by several groups goes to the higher priority), so
      // library code never lands in a sample chunk, and it doesn't capture
      // dependencies, so each chunk holds only its own package.
      test: /[\\/]node_modules[\\/]/,
      priority: 2,
      includeDependenciesRecursively: false,
      name(id) {
        const file = id.replace(/\\/g, '/');

        // Shared IgniteUI runtime → one vendor chunk per package.
        // Without this, the bundler hosts shared library code inside the
        // first sample chunk that imports it, so every other sample transits
        // through that chunk and pulls in its side effects.
        const vendor = file.match(/\/node_modules\/(?:@infragistics\/)?(igniteui-[^/]+)\//);
        if (vendor) {
          return `vendor/${vendor[1]}`;
        }

        // Every other node_modules package too (react, react-dom, lit, …).
        // A shared dep left unassigned gets hosted inside the first *sample*
        // chunk that imports it, so unrelated pages evaluate that sample's
        // module body — its module registrations and theme CSS included.
        const dep = file.match(/\/node_modules\/((?:@[^/]+\/)?[^/]+)\//);
        return dep ? `vendor/${dep[1].replace('/', '--')}` : null;
      },
    },
    {
      // One chunk per sample, so the bundler doesn't try to inline all 950+
      // samples into a single bundle (causes OOM). Unlike the vendor group it
      // captures dependencies (Rolldown's default), which is what pulls each
      // sample's local files (data sources, helpers) into its chunk.
      test: SAMPLE_ENTRY_RE,
      priority: 1,
      name(id) {
        const match = id.match(SAMPLE_ENTRY_RE);
        return match && `samples/${match[1].replace(/[\\/]/g, '--')}`;
      },
    },
  ];

  return {
    name: 'sample-chunking',
    apply: 'build',
    configEnvironment(name, config) {
      if (name !== 'client') {
        return;
      }
      // Set the options rather than return them: Vite runs this hook on every
      // config pass and merges a returned config by concatenating arrays, so
      // each pass would add another copy of the groups.
      const rolldownOptions = ((config.build ??= {}).rolldownOptions ??= {});
      rolldownOptions.preserveEntrySignatures = 'allow-extension';
      rolldownOptions.output = { ...rolldownOptions.output, codeSplitting: { groups } };
    },
  };
}

/**
 * Old sample URLs, kept alive as redirects to the canonical /<group>/<component>/<name>.
 *
 * The previous samples browser also routed /<group>/<component>-<name>
 * (e.g. /maps/geo-map-binding-data-csv), and pages embedded in the docs or
 * other samples still link to that shape. The /samples/... prefix is handled
 * by src/pages/samples/[...slug].astro, because it must also keep the sidebar.
 */
/**
 * Astro prefixes the base onto a redirect's source but not its destination,
 * so destinations carry it explicitly.
 * @param {string} base
 */
async function legacyRedirects(base) {
  const samples = await findSamples('published');
  const entries = samples.map(({ slug }) => {
    const [group, component, name] = slug.split('/');
    return [`/${group}/${component}-${name}`, `${base}/${slug}`];
  });

  return { '/samples': base || '/', ...Object.fromEntries(entries) };
}

// Set BASE_PATH env variable to deploy under a sub-path, e.g. "/react-demos"
const base = process.env.BASE_PATH ?? '';

/**
 * Returns the installed package name for a given unscoped igniteui-* id.
 * If the unscoped package exists in node_modules it is returned as-is;
 * otherwise the @infragistics/ scoped name is returned.
 * @param {string} pkg
 */
function ig(pkg) {
  return existsSync(path.resolve(__dirname, 'node_modules', pkg))
    ? pkg
    : `@infragistics/${pkg}`;
}

// https://astro.build/config
export default defineConfig({
  // Static output — builds to dist/ as plain HTML + JS assets (ideal for IIS / Nginx / CDN)
  output: 'static',

  // When deploying to https://www.infragistics.com/react-demos set:
  //   BASE_PATH=/react-demos npm run build
  base,

  // Match IIS behaviour: routes are served without trailing slashes
  trailingSlash: 'never',

  redirects: await legacyRedirects(base),

  // Compiles sample JSX/TSX; also enables React Fast Refresh in dev.
  integrations: [react()],

  // Keep every stylesheet as an emitted file.  With the default 'auto',
  // Astro inlines small CSS assets into page HTML and deletes the files,
  // but the sample chunks' __vite__mapDeps still preload them at runtime
  // → "Unable to preload CSS" on every sample page.
  build: {
    inlineStylesheets: 'never',
  },

  vite: {
    plugins: [
      resolveIgniteUiScoped(),
      stripSampleMount(),
      inlineSampleCss(),
      sampleChunking(),
    ],
    // samples/ and node_modules/ are already at the repo root (__dirname),
    // so no extra fs.allow entries are needed.
    server: {
      fs: {
        allow: [path.resolve(__dirname)],
      },
    },

    // Workaround for a Vite 8 bug (https://github.com/vitejs/vite/issues/23096):
    // in a server environment — Astro prerenders pages in one — the CSS
    // `@import` resolver externalizes bare package specifiers, so the tailwind
    // samples' `@import "tailwindcss";` resolves to <root>/tailwindcss and the
    // build fails with ENOENT. Nothing imports tailwindcss from JS, so never
    // externalizing it is harmless. Remove once the upstream fix ships.
    resolve: {
      noExternal: ['tailwindcss'],
    },

    // Dep optimisation:
    // noDiscovery stops the dependency scanner from crawling any source files
    // (including [..slug].astro whose client script globs sample TSX files that
    // have CSS side-effect imports — causing "Expected ';'" crashes).
    // We explicitly pre-bundle the runtime packages so the first sample click
    // is fast without triggering the scanner. Subpath entries are listed too:
    // a subpath left out is served unbundled next to its pre-bundled package,
    // and the two copies register the same custom elements twice.
    optimizeDeps: {
      noDiscovery: true,
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'igniteui-webcomponents',
        'igniteui-grid-lite',
        ...IGNITEUI_PACKAGES.map(ig),
        `${ig('igniteui-react')}/extras`,
        `${ig('igniteui-react')}/grid-lite`,
        `${ig('igniteui-react-grids')}/grids/combined`,
        'react-icons/io',
        'react-icons/io5',
        'react-icons/pi',
        // CJS-only packages that need pre-bundling for named-export interop
        'file-saver',
      ],
    },

    // CSS / SCSS:
    // Resolve bare @use specifiers such as 'igniteui-theming/sass/...' from
    // node_modules. `loadPaths` can't: Vite 8's own Sass importer runs first
    // and throws on subpaths `exports` doesn't cover, and igniteui-theming's
    // "./sass/**/*.*" key covers none (a pattern may hold only one `*`).
    // Custom importers run before Vite's. Remove once that key is fixed.
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          importers: [
            {
              findFileUrl(url) {
                // Bare package specifiers only; relative and scheme URLs pass.
                if (!/^[\w@]/.test(url) || url.includes(':')) {
                  return null;
                }
                return pathToFileURL(path.join(__dirname, 'node_modules', url));
              },
            },
          ],
        },
      },
    },

    build: {
      chunkSizeWarningLimit: 16000,
      sourcemap: process.env.NODE_ENV !== 'production',
      cssCodeSplit: true,
      // Chunk layout lives in the sampleChunking() plugin above.
    },
  },
});
