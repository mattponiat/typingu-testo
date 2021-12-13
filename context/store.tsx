import * as React from "react";
import { useEffect, useState, useContext, createContext } from "react";
//Hooks
import { useEventListener } from "hooks/useEventListener";
//Functions
import { WordCheker } from "functions/WordChecker";
//Context
import { WordsContext } from "./WordsContext";

const typingCheck = () => {
  const [lettersFromWords, setLettersFromWords] = useState([""]);
  const [correctLetters, setCorrectLetters] = useState([""]);
  const [incorrectLetters, setIncorrectLetters] = useState([""]);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [words] = useContext(WordsContext)!;

  //Words initial setup
  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
    setCorrectLetters([]);
    setIncorrectLetters([]);
  }, [words]);

  //Keydown event listener calling word checking function
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

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    console.log(`seconds: ${seconds}`);
    console.log(`is active: ${isActive}`);
    return () => clearInterval(interval);
  }, [isActive, seconds]);

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
    setIsActive,
  };
};

const useTyping = () => {
  const {
    lettersFromWords,
    correctLetters,
    incorrectLetters,
    seconds,
    setSeconds,
    setIsActive,
  } = typingCheck();
  return {
    lettersFromWords,
    correctLetters,
    incorrectLetters,
    seconds,
    setSeconds,
    setIsActive,
  };
};
type UseTypingType = ReturnType<typeof useTyping>;

const TypingContext = createContext<UseTypingType | null>(null);

export const useTypingContext = () => useContext(TypingContext)!;

export const TypingProvider = ({ children }: { children: React.ReactNode }) => (
  <TypingContext.Provider value={useTyping()}>
    {children}
  </TypingContext.Provider>
);
