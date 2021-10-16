import React, { useContext } from "react";
import { WordsContext } from "Context/WordsContext";

const Preview: React.FC = () => {
  const { english } = useContext(WordsContext);

  return (
    <>
      {english.map((elem) => (
        <span key={elem}>{elem}</span>
      ))}
    </>
  );
};

export default Preview;
