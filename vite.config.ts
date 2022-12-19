import path from "path";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  build: { sourcemap: true },
  resolve: {
    alias: {
      "@application": path.resolve(__dirname, "src/application"),
      "@domain": path.resolve(__dirname, "src/domain"),
      "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
      "@presentation": path.resolve(__dirname, "src/presentation"),
    },
  },
  test: {
    globals: true,
    watch: false,
    coverage: {
      reporter: ["text", "html"],
      branches: 80,
      functions: 80,
      // include: ["/src"],
      lines: 80,
      statements: -10,
    },
    passWithNoTests: true,
    environment: "happy-dom",
    setupFiles: "./src/vitest.setup.ts",
  },
  server: {
    open: true,
  },
});
