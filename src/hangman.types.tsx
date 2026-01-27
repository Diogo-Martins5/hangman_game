import { ALL_LETTERS } from './constants';

export type LowercaseLetter = (typeof ALL_LETTERS)[number];

export function isLowercaseLetter(char: string): char is LowercaseLetter {
  return ALL_LETTERS.includes(char as LowercaseLetter);
}
