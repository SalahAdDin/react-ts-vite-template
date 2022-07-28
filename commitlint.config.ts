import {
  Commit,
  LintOptions,
  Plugin,
  QualifiedRules,
  Rule,
  UserConfig,
} from '@commitlint/types';

declare module '@commitlint/types' {
  interface Commit {
    ticket: string | null;
  }
}

const types = [
  ':adhesive-bandage:',
  ':alembic:',
  ':alien:',
  ':ambulance:',
  ':animation:',
  ':arrow-down:',
  ':arrow-up:',
  ':art:',
  ':beers:',
  ':bento:',
  ':bookmark:',
  ':boom:',
  ':bug:',
  ':building-construction:',
  ':bulb:',
  ':busts-in-silhouette:',
  ':camera-flash:',
  ':card-file-box:',
  ':chart-with-upwards-trend:',
  ':children-crossing:',
  ':clown-face:',
  ':construction-worker:',
  ':construction:',
  ':egg:',
  ':fire:',
  ':globe-with-meridians:',
  ':goal-net:',
  ':green-heart:',
  ':hammer:',
  ':coffin:',
  ':heavy-minus-sign:',
  ':heavy-plus-sign:',
  ':iphone:',
  ':label:',
  'lipstick:',
  ':lock:',
  ':closed-lock-with-key:',
  ':loud-sound:',
  ':mag:',
  ':memo:',
  ':mute:',
  ':ok-hand:',
  ':package:',
  ':page-facing-up:',
  ':passport-control:',
  ':pencil:',
  ':pencil2:',
  ':poop:',
  ':pushpin:',
  ':recycle:',
  ':rewind:',
  ':rocket:',
  ':rotating-light:',
  ':see-no-evil:',
  ':seedling:',
  ':sparkles:',
  ':speech-balloon:',
  ':stethoscope:',
  ':tada:',
  ':test-tube:',
  ':triangular-flag-on-post:',
  ':truck:',
  ':twisted-rightwards-arrows:',
  ':wastebasket:',
  ':wheelchair:',
  ':white-check-mark:',
  ':wrench:',
  ':zap:',
  ':monocle-face:',
  ':necktie:',
  ':bricks:',
  ':technologist:',
  ':money-with-wings:',
];

// @deprecated Regex based on https://regex101.com/r/L5f7hN/1
// Regex based on https://regex101.com/r/DFWyx5/1

/**
 * If we want to make the ticket required, remove `?` after the last `)`.
 */
const planableTicketWithSpaceAfter = /^(?:\[([A-z]*-\d+)\]\s)?/;

const anyStringEmoji = /(:\w*:)/;

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
      "header must be in format '[P-11] :tada: Replace footer' or '🚧 Replace footer'",
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

const planablePlugin: Plugin = {
  rules: {
    'header-match-planable-pattern': headerMatchPlanablePattern,
    'ticket-match-pattern': ticketPattern,
  },
};

const parserPreset: LintOptions = {
  parserOpts: {
    headerPattern: new RegExp(
      planableTicketWithSpaceAfter.source +
        anyStringEmoji.source +
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
  'type-enum': [2, 'always', types],
  'subject-case': [2, 'always', 'sentence-case'],
};

const Configuration: UserConfig = {
  helpUrl:
    'https://github.com/SalahAdDin/react-ts-vite-template#emojitype-descriptions',
  parserPreset,
  plugins: [planablePlugin],
  rules,
};

export default Configuration;
