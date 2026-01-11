import type { LowercaseLetter } from '../hangman.types';
import { isLowercaseLetter } from '../hangman.types';
import styles from './HangmanWord.module.css';

interface Props {
  word: string;
  guessedLetters: Set<LowercaseLetter>;
}

const HangmanWord = ({ word, guessedLetters }: Props) => {
  return (
    <div className={styles.word}>
      {word.split('').map((letter, index) => {
        const isVisible = isLowercaseLetter(letter) && guessedLetters.has(letter);
        return (
          <span className={styles.bottomDash} key={index}>
            <span
              style={{
                visibility: isVisible ? 'visible' : 'hidden',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
