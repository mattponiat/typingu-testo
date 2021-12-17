import { SetStateAction } from "react";

export const WordCheker = (
  e: KeyboardEvent,
  correctLetters: string[],
  setCorrectLetters: {
    (value: SetStateAction<string[]>): void;
    (arg0: string[]): void;
  },
  incorrectLetters: string[],
  setIncorrectLetters: {
    (value: SetStateAction<string[]>): void;
    (arg0: string[]): void;
  },
  lettersFromWords: string[],
  setLettersFromWords: {
    (value: SetStateAction<string[]>): void;
    (arg0: string[]): void;
  }
) => {
  const key = e.key;

  if (incorrectLetters.length > 0) {
    if (key === "Backspace" || key === "Delete") {
      const incorrectLettersCopy = [...incorrectLetters];
      incorrectLettersCopy.pop();
      setIncorrectLetters(incorrectLettersCopy);
    }
  }

  if (e.code.slice(0, 3) !== "Key" && e.code.slice(0, 3) !== "Spa") return;

  if (key === lettersFromWords[0] && incorrectLetters.length === 0) {
    const remainingLetters = [...lettersFromWords];
    remainingLetters.shift();
    setLettersFromWords([...remainingLetters]);
    const correctLettersCopy = [...correctLetters];
    correctLettersCopy.push(key);
    setCorrectLetters(correctLettersCopy);
  } else {
    const incorrectLettersCopy = [...incorrectLetters];
    incorrectLettersCopy.push(lettersFromWords[incorrectLetters.length]);
    setIncorrectLetters(incorrectLettersCopy);
  }
};
