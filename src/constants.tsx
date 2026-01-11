const hang_height = 400;
const hang_width = 250;

export const TOP_MSGS = {
  win: 'Parabéns, acertou!',
  lose: 'Perdeu! A palavra certa era: ',
  default: 'Jogo da forca, descubra a palavra',
} as const;

export const DRAW = {
  thickness: 10,
  hang_width: hang_width,
  hang_height: hang_height,
  rope_height: hang_height / 8,
  head_size: hang_height / 8,
  top_pole_width: hang_width * (2 / 3),
  body_size: hang_height / 3,
  arm_angle: 40,
  arm_offset: hang_height / 10,
  arm_size: hang_height / 6,
  leg_angle: 60,
  leg_size: hang_height / 5,
} as const;

export const KeyState = {
  DEFAULT: 0,
  RIGHT_GUESS: 1,
  WRONG_GUESS: 2,
} as const;

export const ALL_LETTERS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
] as const;
