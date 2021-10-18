import React, { useState, createContext } from 'react';
import words from 'randomWords.json';

type stateUpdateType = React.Dispatch<React.SetStateAction<string[]>>;

type contextType = [string[], stateUpdateType];

// Default value error, the code works for now but might need to change this in the future
export const WordsContext = createContext<contextType>();

export const WordsProvider: React.FC = ({ children }) => {
    const [wordsState, setWordsState] = useState(words.english);

    return (
        <WordsContext.Provider value={[wordsState, setWordsState]}>
            {children}
        </WordsContext.Provider>
    );
};
