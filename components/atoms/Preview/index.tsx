import React, { useContext } from "react";
import { WordsContext } from "context/WordsContext";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext);

  return (
    <>
      {words.map((elem, i) => (
        <span key={elem + i}>{elem} </span>
      ))}
    </>
  );
};

export default Preview;
