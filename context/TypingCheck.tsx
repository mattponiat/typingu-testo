import * as React from "react";
import { useEffect, useState, useContext, createContext } from "react";
//Hooks
import { useEventListener } from "hooks/useEventListener";
//Context
import { useWordsContext } from "./WordsContext";
//Functions
import { WordCheker } from "functions/WordChecker";

const TypingCheck = () => {
  const [lettersFromWords, setLettersFromWords] = useState([""]);
  const [correctLetters, setCorrectLetters] = useState([""]);
  const [incorrectLetters, setIncorrectLetters] = useState([""]);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [words] = useWordsContext();

  //Words initial setup
  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
    setCorrectLetters([]);
    setIncorrectLetters([]);
  }, [words]);

  //Keydown event listener for the word checking function
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
  });

  //Background timer
  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  //Default start and stop for the background timer
  useEffect(() => {
    if (correctLetters.length > 0 || incorrectLetters.length > 0) {
      setIsActive(true);
    }
    if (lettersFromWords.length === 0) {
      setIsActive(false);
    }
  }, [lettersFromWords, correctLetters, incorrectLetters]);

  return {
    lettersFromWords,
    correctLetters,
    incorrectLetters,
    seconds,
    setSeconds,
    isActive,
    setIsActive,
  };
};

//Context for the main function
type UseTypingType = ReturnType<typeof TypingCheck>;

const TypingContext = createContext<UseTypingType | null>(null);

export const useTypingContext = () => useContext(TypingContext)!;

export const TypingProvider = ({ children }: { children: React.ReactNode }) => (
  <TypingContext.Provider value={{ ...TypingCheck() }}>
    {children}
  </TypingContext.Provider>
);
