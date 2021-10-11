import { useState, useEffect } from "react";
//JSON
import data from "randomWords.json";

export const wordsEng = data.english;

export const changeWordsAmount = () => {
  const [englishWords, setEnglishWords] = useState(wordsEng);

  const differentAmounts = (amount: number) => {
    let arraySize;
    switch (amount) {
      case 10:
      case 25:
      case 50:
      case 100:
        arraySize = englishWords.slice(-amount);
        setEnglishWords(arraySize);
        break;
    }
  };

  return { englishWords };
};
