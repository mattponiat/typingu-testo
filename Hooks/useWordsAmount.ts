import { useContext } from 'react';
import { WordsContext } from 'context/WordsContext';

export const useWordsAmount = () => {
    const [words, setWordsState] = useContext(WordsContext);
    const setWordsAmount = (amount: number) => {
        if (words) {
            switch (amount) {
                case 10:
                case 25:
                case 50:
                case 100:
                    setWordsState(words.slice(-amount));
                    break;
            }
        }
        return;
    };

    return { setWordsAmount };
};
