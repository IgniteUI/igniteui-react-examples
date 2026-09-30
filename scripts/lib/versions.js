/**
 * Package versions kept in sync by `npm run update:ig`.
 *
 * SHARED  → the root package.json and every sample.
 * TOOLING → samples only. The root has its own toolchain (Astro,
 *           TypeScript 6) that standalone sample projects do not use.
 *
 * To switch a package to the licensed feed, prefix its name:
 *   { name: '@infragistics/igniteui-react-charts', version: '19.6.0' }
 */

export const SHARED = [
  // Ignite UI, updated often
  { name: 'igniteui-react', version: '19.9.0' },
  { name: 'igniteui-react-core', version: '19.6.0' },
  { name: 'igniteui-react-charts', version: '19.6.0' },
  { name: 'igniteui-react-dashboards', version: '19.6.0' },
  { name: 'igniteui-react-data-grids', version: '19.6.0' },
  { name: 'igniteui-react-datasources', version: '19.6.0' },
  { name: 'igniteui-react-excel', version: '19.6.0' },
  { name: 'igniteui-react-gauges', version: '19.6.0' },
  { name: 'igniteui-react-grids', version: '19.9.0' },
  { name: 'igniteui-react-inputs', version: '19.6.0' },
  { name: 'igniteui-react-layouts', version: '19.6.0' },
  { name: 'igniteui-react-maps', version: '19.6.0' },
  { name: 'igniteui-react-spreadsheet', version: '19.6.0' },
  { name: 'igniteui-react-spreadsheet-chart-adapter', version: '19.6.0' },

  // Ignite UI, updated occasionally
  { name: 'igniteui-webcomponents', version: '~7.4.1' },
  { name: 'igniteui-react-dockmanager', version: '19.9.0' },
  { name: 'igniteui-dockmanager', version: '^1.17.0' },
  { name: 'igniteui-grid-lite', version: '~0.11.0' },
  { name: 'igniteui-i18n-resources', version: '^1.0.5' },

  // React
  { name: 'react', version: '^19.2.0' },
  { name: 'react-dom', version: '^19.2.0' },
];

export const TOOLING = [
  { name: 'tslib', version: '^2.4.0' },
  { name: 'typescript', version: '^5.9.3' },
  { name: '@types/jest', version: '^29.2.0' },
  { name: '@types/node', version: '^24.7.1' },
  { name: '@types/react', version: '^19.2.0' },
  { name: '@types/react-dom', version: '^19.2.0' },
  { name: '@vitejs/plugin-react', version: '^5.0.4' },
  { name: 'vite', version: '^7.1.9' },
  { name: 'vitest', version: '^3.2.4' },
  { name: '@vitest/browser', version: '^3.2.4' },
  { name: 'vitest-canvas-mock', version: '^0.3.3' },
  { name: 'eslint', version: '^8.33.0' },
  { name: 'eslint-config-react', version: '^1.1.7' },
  { name: 'eslint-plugin-react', version: '^7.20.0' },
];
