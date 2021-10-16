import { useContext } from "react";
import { WordsContext } from "Context/WordsContext";

export const useWordsAmount = () => {
  const { english } = useContext(WordsContext);
  const setWordsAmount = (amount: number) => {
    if (english) {
      switch (amount) {
        case 10:
        case 25:
        case 50:
        case 100:
          console.log(english.slice(-amount));
          break;
      }
    }
    return;
  };

  return { setWordsAmount };
};
