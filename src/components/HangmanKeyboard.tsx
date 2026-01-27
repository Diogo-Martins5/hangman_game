import { KEYBOARD } from '../constants';
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
    if (!guessedLetters.has(key)) return styles.btn;
    return word.includes(key)
      ? `${styles.btn} ${styles.active}`
      : `${styles.btn} ${styles.inactive}`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {KEYBOARD.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.keyboardRow}>
          {row.map((key) => {
            const validKey = key as LowercaseLetter;

            return (
              <button
                disabled={guessedLetters.has(validKey) || isWinnerOrLooser}
                className={getKeyState(validKey)}
                key={validKey}
                onClick={() => onClick(validKey)}
              >
                {validKey}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HangmanKeyboard;
