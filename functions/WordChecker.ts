export const WordCheker = (
  e: KeyboardEvent,
  correctLetters: string[],
  setCorrectLetters: {
    (value: React.SetStateAction<string[]>): void;
    (arg0: string[]): void;
  },
  incorrectLetters: string[],
  setIncorrectLetters: {
    (value: React.SetStateAction<string[]>): void;
    (arg0: string[]): void;
  },
  lettersFromWords: string[],
  setWords: {
    (value: React.SetStateAction<string[]>): void;
    (arg0: string[]): void;
  }
) => {
  const key = e.key;
  const code = e.code;

  //Delete the incorrect words by using Backspace or Delete
  if (incorrectLetters.length > 0) {
    if (key === "Backspace" || key === "Delete") {
      const incorrectLettersCopy = [...incorrectLetters];
      incorrectLettersCopy.pop();
      setIncorrectLetters(incorrectLettersCopy);
    }
  }

  //Words like Tab, Alt, Ctrl etc. don't show up in the typing test
  if (code.slice(0, 3) !== "Key" && code.slice(0, 3) !== "Spa") return;

  //The main functionality
  if (key === lettersFromWords[0] && incorrectLetters.length === 0) {
    const remainingLetters = [...lettersFromWords];
    remainingLetters.shift();
    setWords([...remainingLetters.join("").split(" ")]);
    const correctLettersCopy = [...correctLetters];
    correctLettersCopy.push(key);
    setCorrectLetters(correctLettersCopy);
  } else {
    const incorrectLettersCopy = [...incorrectLetters];
    incorrectLettersCopy.push(lettersFromWords[incorrectLetters.length]);
    setIncorrectLetters(incorrectLettersCopy);
  }
};
