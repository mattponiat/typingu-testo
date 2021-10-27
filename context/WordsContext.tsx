import React, { useState, createContext } from "react";
import words from "randomWords.json";

type stateUpdateType = React.Dispatch<React.SetStateAction<string[]>>;

type contextType = [string[], stateUpdateType];

export const WordsContext = createContext<contextType>(
  [] as unknown as contextType
);

export const WordsProvider: React.FC = ({ children }) => {
  const [wordsState, setWordsState] = useState<string[]>([]);

  return (
    <WordsContext.Provider value={[wordsState, setWordsState]}>
      {children}
    </WordsContext.Provider>
  );
};
