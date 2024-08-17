import type {
  LintOptions,
  QualifiedRules,
  UserConfig,
} from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

declare module "@commitlint/types" {
  type Commit = {
    ticket: string | null;
  };
}

const types = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];

const parserPreset: LintOptions = {
  parserOpts: {
    // https://regex101.com/r/7znOoR/1
    headerPattern: /^(?:\[([A-z]*-\d+)]\s)?(\w*)(?:\((.*)\))?!?:\s(.*)$/,
    headerCorrespondence: ["ticket", "type", "scope", "subject"],
  },
};

const rules: QualifiedRules = {
  "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
  "type-enum": [RuleConfigSeverity.Error, "always", types],
  "body-max-line-length": [RuleConfigSeverity.Error, "always", 250],
  "header-max-length": [RuleConfigSeverity.Error, "always", 150],
};

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  helpUrl:
    "https://github.com/SalahAdDin/react-ts-vite-template#commit-convention",
  parserPreset,
  rules,
};

export default Configuration;
