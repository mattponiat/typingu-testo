import React, { useEffect, useState } from "react";

import data from "randomWords.json";
const englishWords = data.english;

const Preview: React.FC = () => {
  const [words, setWords] = useState(englishWords);
  return (
    <div>
      {words.map((item) => {
        return <span key={item}>{item} </span>;
      })}
    </div>
  );
};

export default Preview;
