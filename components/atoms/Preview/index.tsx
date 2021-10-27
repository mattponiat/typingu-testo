import React, { useContext, useEffect, useState } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";
//Hooks
import { useEventListener } from "hooks/useEventListener";

const Preview: React.FC = () => {
  const [words, setWords] = useContext(WordsContext);
  const [lettersFromWords, setLettersFromWords] = useState(
    words.join(" ").split("")
  );

  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
  }, [words]);

  useEventListener("keydown", (e: KeyboardEvent) => {
    WordCheker(e.key);
  });

  const WordCheker = (key: string) => {
    if (key === lettersFromWords[0]) {
      const remainingLetters = [...lettersFromWords];
      remainingLetters.shift();
      console.log(remainingLetters);
      setLettersFromWords([...remainingLetters]);
    }
  };

  return (
    <Wrapper>
      {words.map((elem, i) => (
        <Text key={`${elem} ${i}`}>{elem} </Text>
      ))}
    </Wrapper>
  );
};

//Styled components
const Text = styled.span`
  font-size: 17px;
`;

const Wrapper = styled.div`
  border: none;
  border-radius: 5px;
  width: 40vw;
  text-align: justify;
  line-height: 27px;
`;

export default Preview;
