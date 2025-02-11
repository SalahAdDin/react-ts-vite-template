import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tanStackQuery from "@tanstack/eslint-plugin-query";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
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
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
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
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      prettier,
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
      "@typescript-eslint/prefer-ts-expect-error": 2,
      // "@typescript-eslint/switch-exhaustiveness-check": 2,
      "function-paren-newline": "warn",
      "implicit-arrow-linebreak": "warn",
      "import-x/no-extraneous-dependencies": [
        "error",
        { devDependencies: true },
      ],
      "import-x/no-unresolved": "error",
      "indent": "off",
      "linebreak-style": ["error", "unix"],
      "object-curly-newline": [
        "error",
        {
          ExportDeclaration: { multiline: true, minProperties: 5 },
        },
      ],
      "operator-linebreak": "warn",
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
  }
);
