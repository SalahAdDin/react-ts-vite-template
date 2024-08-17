import globals from "globals";
import js from "@eslint/js";
import typescript from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import playwright from "eslint-plugin-playwright";
import sonarJs from "eslint-plugin-sonarjs";
import vitest from "@vitest/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";
import query from "@tanstack/eslint-plugin-query";

/**
 * eslint-config-airbnb,
 * eslint-config-airbnb-typescript,
 * eslint-import-resolver-typescript,
 * eslint-plugin-import,
 * eslint-plugin-jest-dom,
 * eslint-plugin-testing-library,
 * eslint-plugin-react-hooks
 *
 * missing
 */

export default [
  // { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ...react.configs.flat.recommended,
    plugins: {
      react,
      reactHooks,
      "@stylistic": stylistic,
    },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      "react/function-component-definition": [
        2,
        { namedComponents: "arrow-function" },
      ],
      "react/hook-use-state": 2,
      "react/jsx-handler-names": 2,
      "react/require-default-props": [
        "error",
        {
          functions: "defaultArguments",
        },
      ],
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "only-multiline",
          objects: "only-multiline",
          imports: "only-multiline",
          exports: "only-multiline",
          functions: "never",
        },
      ],
      "@stylistic/function-paren-newline": "warn",
      "@stylistic/implicit-arrow-linebreak": "warn",
      "@stylistic/indent": ["error", 2],
      "@stylistic/object-curly-newline": [
        "error",
        {
          ExportDeclaration: { multiline: true, minProperties: 5 },
        },
      ],
      "@stylistic/operator-linebreak": "warn",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": "error",
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
  // react.configs.flat.recommended,
  ...query.configs["flat/recommended"],
  js.configs.recommended,
  ...typescript.configs.recommendedTypeChecked,
  {
    ignores: [
      "coverage/",
      "dist/",
      "eslint.config.js",
      "postcss.config.cjs",
      "node_modules/",
      "public/mockServiceWorker.js",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "generic",
        },
      ],
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-function-return-type": 1,
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          custom: { regex: "^T[A-Z]", match: true },
        },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  jsxA11y.flatConfigs.recommended,
  sonarJs.configs.recommended,
  {
    files: ["src/**/*.test.[tj]s?(x)"],
    ignores: ["src/**/*.e2e.test.[tj]s?(x)"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.all.rules,
      "vitest/valid-title": [
        "error",
        {
          mustMatch: {
            it: [
              "^should.*when.+$",
              "Test title must include 'should' and 'when'",
            ],
          },
        },
      ],
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**/*.test.[tj]s?(x)"],
  },
  prettier,
];
