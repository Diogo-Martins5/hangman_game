import styles from './App.module.css';
import words from './listWords_pt-pt.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import HangmanKeyboard from './components/HangmanKeyboard';
import { useState, useEffect } from 'react';
import { TOP_MSGS } from './constants';
import type { LowercaseLetter } from './hangman.types';
import { isLowercaseLetter } from './hangman.types';

function App() {
  // State Variables
  const [wordToGuess, _setWordToGuess] = useState(() => {
    if (words.length === 0) throw new Error('List of words is empty!');
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<Set<LowercaseLetter>>(new Set());
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState(0);
  const wordHasASet: Set<LowercaseLetter> = new Set(
    [...wordToGuess].filter((letter): letter is LowercaseLetter => isLowercaseLetter(letter))
  );
  // Self-note: this will update everytime App is rendered
  const isLoser = numberOfWrongGuesses > 5;
  const isWinner = [...wordToGuess].every((letter) => {
    if (isLowercaseLetter(letter)) {
      return guessedLetters.has(letter);
    }
    return false;
  });

  let top_msg;
  if (isWinner) {
    top_msg = `${TOP_MSGS.win}`;
  } else if (isLoser) {
    top_msg = `${TOP_MSGS.lose}`;
  } else {
    top_msg = `${TOP_MSGS.default}`;
  }
  // Functions
  const addLetter = (letter: LowercaseLetter) => {
    setGuessedLetters((curretLetters) => new Set(curretLetters).add(letter));
  };

  // Main game logic
  const handleKeyClick = (key: LowercaseLetter) => {
    if (isLoser || isWinner) return; // just to make sure we don't have another guess
    addLetter(key);
    if (wordHasASet.has(key)) {
      console.log(isWinner);
    } else {
      setNumberOfWrongGuesses((currentNumber) => currentNumber + 1);
    }
  };

  useEffect(() => {
    console.log('Word to guess: ' + wordToGuess);
  }, []);

  return (
    <div className={styles.divStyle}>
      <div className={styles.textStyle}>{top_msg}</div>
      <HangmanDrawing bodyPartsVisible={numberOfWrongGuesses} />
      <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} />
      <div className={styles.keyboard}>
        <HangmanKeyboard
          word={wordToGuess}
          guessedLetters={guessedLetters}
          onClick={handleKeyClick}
          isWinnerOrLooser={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
