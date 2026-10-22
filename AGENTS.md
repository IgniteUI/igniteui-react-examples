# AGENTS.md

Instructions for coding agents working in this repository. Setup and contributor workflows for people are in [README.md](README.md).

## What this repo is

About 990 standalone React samples for Ignite UI for React, plus an Astro site (the samples browser) that builds them all into one static site. The site is deployed to https://www.infragistics.com/react-demos, and the product docs embed its pages and read its code-viewer JSON, so URLs and output files are a public contract.

Branch from and target `vnext`, which deploys to staging. `master` deploys to production.

## Layout

| Path | Contents |
|------|----------|
| `samples/<group>/<component>/<name>/` | One sample, a standalone Vite project. Its `package.json` is what makes it a sample. |
| `src/pages/[...slug].astro` | The page for each sample: puts its CSS in `<head>`, then lazy-loads and mounts its default export |
| `src/pages/index.astro`, `src/pages/nav.json.ts`, `src/scripts/nav.ts` | Index and sidebar, built from folder names (there is no registry) |
| `src/pages/samples/[...slug].astro` | Redirects old `/samples/<slug>` URLs |
| `astro.config.mjs` | Vite plugins the sample contract below depends on (their comments explain why), and legacy redirects |
| `scripts/`, `scripts/lib/` | Repo scripts and their data: `versions.js`, `templates.js`, `unpublished.json` |
| `public/web.config` | IIS config, shipped at the root of the deployed site |
| `tests/smoke/` | Playwright smoke tests against the production build |

Build output is git-ignored and regenerated: `dist/`, `public/code-viewer/`, `public/ig-themes/`, `.astro/`. Don't edit or commit it.

## Generated and hand-maintained samples

About 560 samples, mostly charts, gauges, maps and grids, are exported from [igniteui-xplat-examples](https://github.com/IgniteUI/igniteui-xplat-examples). The next export overwrites edits made here. Check before editing a sample:

```bash
curl -s -o /dev/null -w "%{http_code}\n" \
  https://raw.githubusercontent.com/IgniteUI/igniteui-xplat-examples/main/samples/<group>/<component>/<name>.json
# 200: generated   404: hand-maintained
```

- **Generated**: change the source in igniteui-xplat-examples (the sample's JSON, or `code-gen-library` for data sources and handlers). Patch the sample here as well only when the fix can't wait for the next export, and say so in the PR. Don't restyle generated code (class components, `IgrXxxModule.register()`, `render(): JSX.Element`); it is the generator's output.
- **Hand-maintained**: function components with hooks, the strict `tsconfig.json` from `npm run add:sample`, and no `register()` calls for `igniteui-react` components, which no longer need them.

## The sample contract

- `src/index.tsx` must `export default` the sample component and end with the standalone mount, rendering one self-closing element:
  ```tsx
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(<Sample/>);
  ```
  The site strips these lines and mounts the default export itself. The build fails if either is missing.
- Import stylesheets only from `src/index.tsx`, and only in two shapes: an IG theme (`igniteui-webcomponents/themes/{light|dark}/{material|bootstrap|fluent|indigo}.css`, or the same path under `igniteui-react-grids/grids/themes/`), or a file next to it (`./index.css`). The page moves exactly these into `<head>`. Other shapes still load, but late, so the sample flashes unstyled.
- Import IG packages by their unscoped names (`igniteui-react-grids`), never `@infragistics/...`. The deploy installs the licensed builds, and a Vite plugin redirects the imports.
- A sample's folder path is its public URL, `/react-demos/<group>/<component>/<name>`, and the docs link to it and read `code-viewer/<group>/<component>/<name>.json`. Don't rename, move or delete a sample without coordinating with the docs.
- Samples in `scripts/lib/unpublished.json` stay in the repo but are left out of the site and the code viewer.

## Changing things

- Start a new sample with `npm run add:sample <group>/<component>/<name>`, not by copying a folder; the templates in `scripts/lib/templates.js` are current, and old folders carry outdated config.
- Never edit versions in a `package.json` by hand. Change `scripts/lib/versions.js`, then run `npm run update:ig && npm install` and commit every changed `package.json` and `package-lock.json`.
- Don't add `.eslintrc.js`, `sandbox.config.json` or `.devcontainer/` to samples, and don't add CodeSandbox links to READMEs. They were removed on purpose.
- Files use LF line endings (`.gitattributes`). Match the indentation of the file you edit: most samples use 4 spaces; the site, scripts and tests use 2.

## Checks

CI ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs these on every PR to `vnext` and `master`. Run them before you call a change done:

```bash
npm run update:ig && git diff --exit-code -- package.json 'samples/**/package.json'   # versions in sync
npm run check                           # astro check of src/ and tests/
npm run check:samples                   # type-check every sample, ~30 s
BASE_PATH=/react-demos npm run build    # the deployed shape, ~2 min
BASE_PATH=/react-demos npm run test:smoke
```

- For a change confined to samples, the quick loop is `npm run check:samples`, then `npm run dev` and opening `http://localhost:4200/<group>/<component>/<name>` with no console errors. Run the full build and smoke tests before opening the PR, and always when you touch `src/`, `astro.config.mjs`, `public/` or `scripts/`.
- `check:samples` fails on any type error in a published sample; only samples in `scripts/lib/unpublished.json` are skipped. Fix the error; don't unpublish a sample to silence it.
- The smoke tests need a build made with the same `BASE_PATH`, and Chromium: `npx playwright install --only-shell chromium`.
- In Git Bash on Windows, `BASE_PATH=/react-demos` is rewritten into a Windows path and the build fails. Prefix the command with `MSYS_NO_PATHCONV=1`, or set the variable in PowerShell.

## Deploy contract

[.github/workflows/build-and-deploy.yml](.github/workflows/build-and-deploy.yml) builds `dist/` with `BASE_PATH=/react-demos`, zips its contents into `react-demos.zip` (artifact `react-demos-artifact`), and triggers IgniteUI/igniteui-actions, which syncs the zip into the IIS site folder and deletes every file the zip doesn't contain. Keep these in every build:

- `web.config` at the root of `dist/`, from `public/web.config`. It serves Astro's `<path>/index.html` for extensionless URLs.
- A page per published sample at `/<group>/<component>/<name>`, plus the redirects from `/samples/<slug>` and `/<group>/<component>-<name>`.
- `code-viewer/<group>/<component>/<name>.json` for every published sample, in the schema documented in `scripts/generate-code-viewer.js`. The docs code viewer and its StackBlitz export read these files.
