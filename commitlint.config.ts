import {
  Commit,
  LintOptions,
  Plugin,
  QualifiedRules,
  Rule,
  RuleConfigCondition,
  UserConfig,
} from '@commitlint/types';

declare module '@commitlint/types' {
  interface Commit {
    ticket: string | null;
  }
}

// Regex based on https://regex101.com/r/L5f7hN/1

/**
 * If we want to make the ticket required, remove `?` after the last `)`.
 */
const planableTicketWithSpaceAfter = /^(?:\[([A-z]*-\d+)\]\s)?/;

const anyEmoji =
  /([\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}](?:[\u{fe00}-\u{fe0f}])?)/u;

const composedOptionalScope = /(?:\([^()\r\n]*\)|\()?(!)?/;

/**
 * If we want to force a `:` before the subject, add `:` after `<subject>`.
 */
const optionalSubject = /(.*)?/;

/**
 * To make `ticket` required, get it from `parsed` and check it to not be null
 * @param parsed
 * @returns [boolean]
 */
const headerMatchPlanablePattern: Rule = (parsed: Commit) => {
  const { type, subject } = parsed;

  if (type === null && subject === null) {
    return [
      false,
      "header must be in format '[P-11] 🌈 Replace footer' or '🚧 Replace footer'",
    ];
  }
  return [true];
};

const ticketPattern: Rule = (parsed: Commit) => {
  // Based on https://regex101.com/r/IMkdYo/1
  const planableTicket = /^(\[([A-z]*-\d+)\])/;

  const { ticket } = parsed;

  if (ticket) {
    if (!planableTicket.test(`[${ticket}]`)) {
      return [
        false,
        'ticket must be in format of a valid Linear issue, for example: [P-11]',
      ];
    }
  }
  return [true];
};

const explainedTypeEnum: Rule<string[]> = (
  parsed: Commit,
  _when?: RuleConfigCondition,
  expectedValue?: string[],
) => {
  const { type } = parsed;
  if (type && expectedValue && !expectedValue.includes(type)) {
    return [false, `type must be one of ${expectedValue.join(', ')}.`];
  }
  return [true];
};

const planablePlugin: Plugin = {
  rules: {
    'header-match-planable-pattern': headerMatchPlanablePattern,
    'ticket-match-pattern': ticketPattern,
    'explained-type-enum': explainedTypeEnum,
  },
};

const parserPreset: LintOptions = {
  parserOpts: {
    headerPattern: new RegExp(
      planableTicketWithSpaceAfter.source +
        anyEmoji.source +
        composedOptionalScope.source +
        optionalSubject.source,
      'u',
    ),
    headerCorrespondence: ['ticket', 'type', 'scope', 'breaking', 'subject'],
  },
  plugins: {
    planable: planablePlugin,
  },
};

const rules: QualifiedRules = {
  // 'type-empty': [2, 'never'],
  // 'type-case': [2, 'always', 'lower-case'],
  // 'subject-empty': [2, 'never'],
  // 'body-empty': [2, 'always'],
  // 'footer-empty': [2, 'always'],
  // 'references-empty': [2, 'never'],

  'header-match-planable-pattern': [2, 'always'],
  'ticket-match-pattern': [2, 'always'],
  'explained-type-enum': [
    2,
    'always',
    [
      '🎉',
      '🔖',
      '✅',
      '🚧',
      '📓',
      '🐞',
      '🚨',
      '👌',
      '⚡️',
      '⬆️',
      '⬇️',
      '✏️',
      '♻️',
      '⭐️',
      '✨',
      '🛠️',
      '📦',
      '🌈',
      '🔀',
    ],
  ],
  'subject-case': [2, 'always', 'sentence-case'],
};

const Configuration: UserConfig = {
  helpUrl: 'https://github.com/Planable/commitlint-config#emoji-descriptions=',
  parserPreset,
  plugins: [planablePlugin],
  rules,
};

export default Configuration;
