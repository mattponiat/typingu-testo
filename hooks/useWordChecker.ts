export const useWordCheker = (
  e: any,
  correctLetters: any,
  setCorrectLetters: any,
  incorrectLetters: any,
  setIncorrectLetters: any,
  lettersFromWords: any,
  setLettersFromWords: any
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
    incorrectLettersCopy.push(key);
    setIncorrectLetters(incorrectLettersCopy);
  }
};
