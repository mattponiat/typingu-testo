import { useContext, useEffect } from "react";
import { WordsContext } from "context/WordsContext";
import wordsData from "randomWords.json";

export const useWordsAmount = () => {
  const [words, setWordsState] = useContext(WordsContext);
  const tempArray = [] as string[];
  const lang = "english"; //Will use localStorage later, for now only English

  const numberRandomizer = () => {
    let randomNumber = Math.floor(Math.random() * wordsData[lang].length);
    return randomNumber;
  };

  //Randomize words on site load
  useEffect(() => {
    const availableWords = wordsData[lang].length;
    const amount = availableWords >= 100 ? 100 : availableWords;
    if (words) {
      for (let i = 0; i < amount; i++) {
        tempArray.push(wordsData[lang][numberRandomizer()]);
      }
    }
    setWordsState(tempArray);
  }, []);

  //Randomize and set words for the buttons
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
