import path from "path";

import { loadEnv } from "vite";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_APP_BASE_URL,
    plugins: [react()],
    css: {
      devSourcemap: true,
    },
    build: { sourcemap: true },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@application": path.resolve(__dirname, "src/application"),
        "@domain": path.resolve(__dirname, "src/domain"),
        "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
        "@presentation": path.resolve(__dirname, "src/presentation"),
      },
    },
    test: {
      globals: true,
      clearMocks: true,
      css: true,
      include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      exclude: ["tests"],
      watch: false,
      coverage: {
        provider: "v8",
        reporter: ["text", "html"],
        exclude: [
          ...coverageConfigDefaults.exclude,
          "src/application/utils/test-utils.tsx",
        ],
        thresholds: {
          branches: 90,
          functions: 95,
          lines: 80,
          statements: 80,
        },
      },
      passWithNoTests: true,
      environment: "happy-dom",
      setupFiles: "./src/vitest.setup.ts",
    },
    server: {
      open: true,
      host: env.VITE_SERVER_HOST,
      port: Number(env.VITE_SERVER_PORT),
    },
  };
});
