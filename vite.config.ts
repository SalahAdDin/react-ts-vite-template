/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@application': path.resolve(__dirname, 'src/application'),
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
      '@presentation': path.resolve(__dirname, 'src/presentation'),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    coverage: {
      reporter: ['text', 'html'],
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    environment: 'happy-dom',
    setupFiles: './src/vitest.setup.ts',
  },
});
