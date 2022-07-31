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
  ':adhesive_bandage:',
  ':alembic:',
  ':alien:',
  ':ambulance:',
  ':animation:',
  ':arrow_down:',
  ':arrow_up:',
  ':art:',
  ':beers:',
  ':bento:',
  ':bookmark:',
  ':boom:',
  ':bug:',
  ':building_construction:',
  ':bulb:',
  ':busts_in_silhouette:',
  ':camera_flash:',
  ':card_file_box:',
  ':chart_with_upwards_trend:',
  ':children_crossing:',
  ':clown_face:',
  ':construction_worker:',
  ':construction:',
  ':egg:',
  ':fire:',
  ':globe_with_meridians:',
  ':goal_net:',
  ':green_heart:',
  ':hammer:',
  ':coffin:',
  ':heavy_minus_sign:',
  ':heavy_plus_sign:',
  ':iphone:',
  ':label:',
  'lipstick:',
  ':lock:',
  ':closed_lock_with_key:',
  ':loud_sound:',
  ':mag:',
  ':memo:',
  ':mute:',
  ':ok_hand:',
  ':package:',
  ':page_facing_up:',
  ':passport_control:',
  ':pencil:',
  ':pencil2:',
  ':poop:',
  ':pushpin:',
  ':recycle:',
  ':rewind:',
  ':rocket:',
  ':rotating_light:',
  ':see_no_evil:',
  ':seedling:',
  ':sparkles:',
  ':speech_balloon:',
  ':stethoscope:',
  ':tada:',
  ':test_tube:',
  ':triangular_flag_on_post:',
  ':truck:',
  ':twisted_rightwards_arrows:',
  ':wastebasket:',
  ':wheelchair:',
  ':white_check_mark:',
  ':wrench:',
  ':zap:',
  ':monocle_face:',
  ':necktie:',
  ':bricks:',
  ':technologist:',
  ':money_with_wings:',
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
      "header must be in format '[P-11] :tada: Replace footer' or ':recycle: Replace footer'",
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
