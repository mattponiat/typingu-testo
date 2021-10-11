import React from "react";
//Functions
import { wordsEng } from "functions/changeWordsAmount";

const Preview: React.FC = () => {
  return (
    <div>
      {wordsEng.map((data) => {
        return <span key={data}>{data} </span>;
      })}
    </div>
  );
};

export default Preview;
