import * as React from "react";
import { useState, createContext } from "react";

type stateUpdateType = React.Dispatch<React.SetStateAction<string[]>>;

type contextType = [string[], stateUpdateType];

export const WordsContext = createContext<contextType | null>(null);

export const WordsProvider = ({ children }: { children: React.ReactNode }) => {
  const [words, setWords] = useState([""]);

  return (
    <WordsContext.Provider value={[words, setWords]}>
      {children}
    </WordsContext.Provider>
  );
};
