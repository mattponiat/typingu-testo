import { useState, useEffect } from "react";
//Hooks
import { useEventListener } from "./useEventListener";
//Functions
import { WordCheker } from "functions/WordChecker";

export const useTyping = (words: string[], ref?: any) => {
  const [lettersFromWords, setLettersFromWords] = useState<string[]>(words);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  //Background Timer
  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSec) => prevSec + 1);
      }, 1000);
    } else if (!isActive && seconds > 0) {
      clearInterval(interval);
    }
    console.log(isActive);
    console.log(seconds);
    return () => clearInterval(interval);
  }, [seconds, isActive]);

  //Starting and ending timer
  useEffect(() => {
    if (correctLetters.length !== 0 || incorrectLetters.length !== 0) {
      setIsActive(true);
    }
    if (lettersFromWords.length === 0) {
      setIsActive(false);
    }
  }, [lettersFromWords, correctLetters, incorrectLetters]);

  //Words initial setup
  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
    setCorrectLetters([]);
    setIncorrectLetters([]);
  }, [words]);

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (lettersFromWords.length) {
      WordCheker(e, correctLetters, incorrectLetters, lettersFromWords);
      if (e.code !== "Enter") {
        ref?.current?.focus();
      }
    }
  });

  return {
    correctLetters,
    incorrectLetters,
    lettersFromWords,
    seconds,
  };
};
