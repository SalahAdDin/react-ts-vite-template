import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tanStackQuery from "@tanstack/eslint-plugin-query";
import tsParser from "@typescript-eslint/parser";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import jestDOM from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import playwright from "eslint-plugin-playwright";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["coverage", "dist"] },
  sonarjs.configs.recommended,
  {
    extends: [importX.flatConfigs.recommended],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // "@stylistic/indent": "off",
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
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/operator-linebreak": "warn",
      "@stylistic/object-curly-newline": [
        "error",
        {
          ExportDeclaration: { multiline: true, minProperties: 5 },
        },
      ],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        }),
      ],
    },
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      jsxA11y.flatConfigs.recommended,
      ...tanStackQuery.configs["flat/recommended"],
      react.configs.flat["jsx-runtime"],
      importX.flatConfigs.typescript,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      ecmaVersion: 2022,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
    },
    rules: {
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "generic",
        },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
        },
      ],
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
      // https://typescript-eslint.io/getting-started/typed-linting/
      // "@typescript-eslint/switch-exhaustiveness-check": 2,
      "import-x/no-extraneous-dependencies": [
        "error",
        { devDependencies: true },
      ],
      "import-x/no-unresolved": "error",
      "indent": "off",
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
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["src/**/*.test.[tj]s?(x)"],
    ignores: ["src/**/*.e2e.test.[tj]s?(x)"],
    ...jestDOM.configs["flat/recommended"],
    ...testingLibrary.configs["flat/react"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
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
  },
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**/*.test.[tj]s?(x)"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
    },
  },
  prettier
);
