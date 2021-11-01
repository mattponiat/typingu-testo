import * as React from "react";
import { useState, createContext } from "react";

type stateUpdateType = React.Dispatch<React.SetStateAction<string[]>>;

type contextType = [string[], stateUpdateType];

export const WordsContext = createContext<contextType | null>(null);

export const WordsProvider = ({ children }: { children: React.ReactNode }) => {
  const [wordsState, setWordsState] = useState<string[]>([]);

  return (
    <WordsContext.Provider value={[wordsState, setWordsState]}>
      {children}
    </WordsContext.Provider>
  );
};
