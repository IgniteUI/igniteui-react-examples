/**
 * Starter files for `npm run add:sample`.
 *
 * Each template is a function of the sample's names, e.g. for
 * "inputs/button/new-thing":
 *   slug      inputs/button/new-thing
 *   title     Button New Thing
 *   component ButtonNewThing
 *   pkgName   react-button-new-thing
 *
 * Versions come from lib/versions.js, so a new sample starts on the same
 * packages `npm run update:ig` keeps every other sample on.
 *
 * tsconfig uses `moduleResolution: bundler`: the IG packages publish their
 * types only through `exports`, which `node` resolution ignores.
 */
import { SHARED, TOOLING } from './versions.js';

const DEPENDENCIES = ['igniteui-react', 'igniteui-webcomponents', 'react', 'react-dom'];
const DEV_DEPENDENCIES = ['@types/react', '@types/react-dom', '@vitejs/plugin-react', 'typescript', 'vite'];

/** { name: version } for the given names, in the given order. */
function pick(list, names) {
  const versions = new Map(list.map(p => [p.name, p.version]));
  return Object.fromEntries(names.map(name => [name, versions.get(name)]));
}

const indexHtml = n => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${n.title}</title>
    <link rel="shortcut icon" href="https://dl.infragistics.com/x/img/browsers/react.png" />
    <link rel="stylesheet" href="https://dl.infragistics.com/x/css/samples/shared.v8.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
`;

// The module-level mount lets the sample run standalone. The samples
// browser strips it at build time and mounts the default export itself.
const indexTsx = n => `import ReactDOM from 'react-dom/client';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function ${n.component}() {
    return (
        <div className="container sample">
            <IgrButton variant="contained">Button</IgrButton>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<${n.component} />);
`;

const indexCss = () => `/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
`;

const tsconfig = () =>
  JSON.stringify(
    {
      compilerOptions: {
        target: 'es2020',
        lib: ['es2020', 'dom', 'dom.iterable'],
        module: 'esnext',
        moduleResolution: 'bundler',
        jsx: 'react-jsx',
        types: ['vite/client'],
        strict: true,
        resolveJsonModule: true,
        isolatedModules: true,
        skipLibCheck: true,
        noEmit: true,
      },
      include: ['src'],
    },
    null,
    2,
  ) + '\n';

const viteConfig = () => `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  server: {
    open: false
  },
});
`;

const packageJson = n =>
  JSON.stringify(
    {
      name: n.pkgName,
      description: `This project provides example of ${n.title} using Infragistics React components`,
      author: 'Infragistics',
      version: '1.0.0',
      private: true,
      scripts: {
        start: 'vite --port 4200',
        build: 'tsc && vite build',
        preview: 'vite preview',
      },
      dependencies: pick(SHARED, DEPENDENCIES),
      devDependencies: pick(TOOLING, DEV_DEPENDENCIES),
    },
    null,
    2,
  ) + '\n';

const readme = n => `This folder contains a React application with the ${n.title} example.

- [Run in the samples browser](https://www.infragistics.com/react-demos/${n.slug})
- [Source](./src/index.tsx)

## Run locally

\`\`\`
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples/samples/${n.slug}
npm install
npm start
\`\`\`

Then open http://localhost:4200/ in your browser.
`;

/** Relative path → template. */
export const TEMPLATES = {
  'index.html': indexHtml,
  'src/index.tsx': indexTsx,
  'src/index.css': indexCss,
  'tsconfig.json': tsconfig,
  'vite.config.js': viteConfig,
  'package.json': packageJson,
  'README.md': readme,
};
