import { useState, useEffect } from "react";
//Hooks
import { useEventListener } from "./useEventListener";
//Functions
import { WordCheker } from "functions/WordChecker";

export const useTyping = (ref: any, words: string[]) => {
  const [lettersFromWords, setLettersFromWords] = useState<string[]>(words);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);

  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
    setCorrectLetters([]);
    setIncorrectLetters([]);
  }, [words]);

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (lettersFromWords.length) {
      WordCheker(
        e,
        correctLetters,
        setCorrectLetters,
        incorrectLetters,
        setIncorrectLetters,
        lettersFromWords,
        setLettersFromWords
      );
    }
    if (e.code !== "Enter") {
      ref.current?.focus();
    }
  });
  return { correctLetters, incorrectLetters, lettersFromWords };
};
