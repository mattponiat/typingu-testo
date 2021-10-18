import { useContext, useEffect } from "react";
import { WordsContext } from "context/WordsContext";
import wordsData from "randomWords.json";

export const useWordsAmount = () => {
  const [words, setWordsState] = useContext(WordsContext);
  const tempArray = [] as string[];
  const lang = "english";

  const numberRandomizer = () => {
    let randomNumber = Math.floor(Math.random() * wordsData[lang].length);
    return randomNumber;
  };

  //Randomize words on site load
  useEffect(() => {
    if (words) {
      for (let i = 0; i < wordsData[lang].length; i++) {
        tempArray.push(wordsData[lang][numberRandomizer()]);
      }
    }
    setWordsState(tempArray);
  }, []);

  const setWordsAmount = (amount: number) => {
    if (words) {
      for (let i = 0; i < amount; i++) {
        tempArray.push(wordsData[lang][numberRandomizer()]);
      }
    }
    setWordsState(tempArray);
    return;
  };

  return { setWordsAmount };
};
