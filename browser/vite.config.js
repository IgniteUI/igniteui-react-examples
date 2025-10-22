import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      'igniteui-react-grids/grids': resolve(__dirname, 'node_modules/igniteui-react-grids/grids'),
      'igniteui-react-grids/grids/themes/light/': resolve(__dirname, 'node_modules/igniteui-react-grids/grids/themes/light/'),
      '@infragistics/igniteui-react-grids/grids': resolve(__dirname, 'node_modules/@infragistics/igniteui-react-grids/grids'),
      '@infragistics/igniteui-react-grids/grids/themes/light/': resolve(__dirname, 'node_modules/@infragistics/igniteui-react-grids/grids/themes/light/')
    }
  },
  optimizeDeps: {
    include: [
      'pako',
      'jszip'
    ]
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/]
    }
  },
  server: {
    open: false
  },
});