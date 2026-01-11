import { ALL_LETTERS } from '../constants';
import type { LowercaseLetter } from '../hangman.types';
import styles from './HangmanKeyboard.module.css';

interface Props {
  onClick: (key: LowercaseLetter) => void;
  guessedLetters: Set<LowercaseLetter>;
  isWinnerOrLooser: boolean;
  word: string;
}

const HangmanKeyboard = ({ onClick, guessedLetters, word, isWinnerOrLooser }: Props) => {
  const getKeyState = (key: LowercaseLetter) => {
    if (!guessedLetters.has(key)) return `${styles.btn}`;
    return word.includes(key)
      ? `${styles.btn} ${styles.active}`
      : `${styles.btn} ${styles.inactive}`;
  };
  return (
    <div className={styles.keyboard}>
      {ALL_LETTERS.map((key) => {
        return (
          <button
            disabled={guessedLetters.has(key) || isWinnerOrLooser}
            className={getKeyState(key)}
            key={key}
            onClick={() => onClick(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
