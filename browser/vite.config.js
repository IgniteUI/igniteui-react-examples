import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/react-demos/' : '/',
  build: {
    outDir: 'build'
  },
  server: {
    open: false
  },
}));