
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <img style="border-radius: 0.25rem" alt="ignite-ui" src="https://dl.infragistics.com/x/img/browsers/ig-banner.png"/>
</div>

# Examples of Ignite UI for React Components

This repository contains over 900 examples on how to use [Ignite UI for React](https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started.html) components:

- Charts:
[Area](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/area-chart),
[Bar](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/bar-chart),
[Column](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/column-chart),
[Composite](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/composite-chart),
[Donut](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/donut-chart),
[Financial/Stock](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/stock-chart),
[Line](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/line-chart),
[Pie](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/pie-chart),
[Polar](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/polar-chart),
[Radial](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/radial-chart),
[Scatter](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/scatter-chart),
[Shape](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/shape-chart),
[Sparkline](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/sparkline-chart),
[Stacked](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/stacked-chart),
[Step](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/step-chart),
- Maps:
[Geographic Map](https://www.infragistics.com/products/ignite-ui-react/react/components/geo-map.html),
[Treemap](https://www.infragistics.com/products/ignite-ui-react/react/components/treemap-overview.html),
- Gauges:
[Bullet Graph](https://www.infragistics.com/products/ignite-ui-react/react/components/bullet-graph),
[Linear Gauge](https://www.infragistics.com/products/ignite-ui-react/react/components/linear-gauge.html),
[Radial Gauges](https://www.infragistics.com/products/ignite-ui-react/react/components/radial-gauge.html)
- Grids & Lists:
[Grid](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/data-grid), 
[List](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/list), 
[Tree](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/tree), 
[Table / Grid](https://www.infragistics.com/products/ignite-ui-react/react/components/data-grid.html),
[Spreadsheet](https://www.infragistics.com/products/ignite-ui-react/react/components/spreadsheet-overview)
- Other:
[Dock Manager](https://www.infragistics.com/products/ignite-ui-react/react/components/dock-manager),
[Date Picker](https://www.infragistics.com/products/ignite-ui-react/react/components/editors/date-picker),
[Multi-Column Combobox](https://www.infragistics.com/products/ignite-ui-react/react/components/editors/multi-column-combobox)

## Branches

> **_NOTE:_** Use the [master](https://github.com/IgniteUI/igniteui-react-examples/tree/master) branch to run samples locally. Use the [vnext](https://github.com/IgniteUI/igniteui-react-examples/tree/vnext) branch only when contributing new samples.

## Preview

Browse all samples in the [React Samples Browser](https://www.infragistics.com/react-demos/samples/), or with documentation in the [React Help](https://infragistics.com/reactsite/components/general-getting-started.html).

Each sample folder is also a standalone project with its own README, e.g. [./samples/charts/category-chart/overview/README.md](./samples/charts/category-chart/overview/README.md).

## Setup

Clone the repository and install dependencies from the root:

```bash
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
git checkout master
npm install
```

## Running All Samples (Dev Server)

```bash
npm run dev
```

Open [http://localhost:4200](http://localhost:4200). The index lists every component; the sidebar lists every sample. Samples compile on demand, so there is no copy or full build step, and edits to `samples/` reload in place.

## Running an Individual Sample

Every sample under `samples/{group}/{component}/{name}/` runs on its own:

```bash
cd samples/charts/category-chart/overview
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200).

## Building for Production

```bash
npm run build
npm run preview
```

`npm run build` first copies the Ignite UI theme sheets to `public/ig-themes/` and generates `public/code-viewer/**/*.json` (the source tabs of the docs code viewer), then builds every sample page into `dist/`. `npm run preview` serves `dist/` on [http://localhost:4200](http://localhost:4200).

The deployed site lives under a sub-path. Set `BASE_PATH` for both commands to reproduce it:

```bash
BASE_PATH=/react-demos npm run build
BASE_PATH=/react-demos npm run preview
```

## Testing

Smoke tests run in Playwright against the production build:

```bash
npx playwright install --only-shell chromium   # once
npm run build
npm run test:smoke
```

Use the same `BASE_PATH` for the build and the tests. CI builds and tests with `BASE_PATH=/react-demos`.

## Adding a New Sample

1. Create a branch from `vnext`.

2. Scaffold the sample:
   ```bash
   npm run add:sample inputs/button/new-thing
   ```
   The folder must be exactly `samples/{group}/{component}/{name}/`, with:
   - `src/index.tsx`: `export default` the sample component, and end with the standalone mount (`root.render(<Sample />)`). The samples browser strips that mount and renders the default export itself; the build fails if either is missing.
   - `index.html`: the standalone entry, `<div id="root">` only.
   - `package.json`: dependencies for running standalone. Its presence is what adds the sample to the browser.

   Import theme and sample CSS from `src/index.tsx` (e.g. `import './index.css';`) so the page puts it in `<head>` at first paint.

3. Start the dev server and verify:
   ```bash
   npm run dev
   ```
   - the sample appears in the sidebar
   - it loads without errors in the browser console

4. Commit, push, and open a pull request targeting `vnext`. Include a screenshot of the running sample.

## Updating Ignite UI Package Versions

Do **not** edit version strings in `package.json` files by hand; CI fails when a sample's versions drift from the list.

1. Update the versions in [./scripts/lib/versions.js](./scripts/lib/versions.js): `SHARED` applies to the root and every sample, `TOOLING` to samples only.
2. Run from the repo root:
   ```bash
   npm run update:ig
   npm install
   ```
3. Create and merge a pull request with the updated `package.json` files.
4. Create a second pull request with the same versions in `/editor-templates/react/main-template/package.json` of the [igniteui-xplat-examples](https://github.com/IgniteUI/igniteui-xplat-examples) repository.

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Astro dev server on port 4200 |
| `npm run build` | Copy themes, generate code-viewer JSON, build the static site to `dist/` |
| `npm run preview` | Serve `dist/` on port 4200 |
| `npm run test:smoke` | Run the Playwright smoke tests against the production build |
| `npm run check` | Type-check `src/` and `tests/` with `astro check` |
| `npm run add:sample` | Scaffold `samples/{group}/{component}/{name}/` |
| `npm run update:ig` | Apply `scripts/lib/versions.js` to every `package.json` |
| `npm run generate:code-viewer` | Regenerate `public/code-viewer/**/*.json` |
| `npm run copy:themes` | Copy Ignite UI theme sheets to `public/ig-themes/` |

## Learn More

To learn more about **Ignite UI for React** components, check out the [React documentation](https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started.html).
