import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(__dirname, 'node_modules')]
      }
    }
  },
  build: {
    outDir: 'build'
  },
  server: {
    open: false
  },
});
