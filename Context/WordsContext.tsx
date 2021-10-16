import { createContext } from "react";
import words from "randomWords.json";

interface WordsType {
  english: string[];
}

export const WordsContext = createContext<WordsType>(words);
