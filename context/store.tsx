import * as React from "react";
//Hooks
import { useEventListener } from "hooks/useEventListener";
//Functions
import { WordCheker } from "functions/WordChecker";
//Context
import { WordsContext } from "./WordsContext";

export interface Typing {
  lettersFromWords: string[];
  correctLetters: string[];
  incorrectLetters: string[];
  isActive: boolean;
  seconds: number;
}

export const typingCheck = () => {
  const [lettersFromWords, setLettersFromWords] = React.useState([""]);
  const [correctLetters, setCorrectLetters] = React.useState([""]);
  const [incorrectLetters, setIncorrectLetters] = React.useState([""]);
  const [words] = React.useContext(WordsContext)!;
  //Words initial setup
  React.useEffect(() => {
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
  return { lettersFromWords, correctLetters, incorrectLetters };
};

const useTyping = () => {
  const { lettersFromWords, correctLetters, incorrectLetters } = typingCheck();
  return {
    lettersFromWords,
    correctLetters,
    incorrectLetters,
  };
};
type UseTypingType = ReturnType<typeof useTyping>;

const TypingContext = React.createContext<UseTypingType | null>(null);

export const useTypingContext = () => React.useContext(TypingContext)!;

export const TypingProvider = ({ children }: { children: React.ReactNode }) => (
  <TypingContext.Provider value={useTyping()}>
    {children}
  </TypingContext.Provider>
);
