import React, { useContext, useEffect, useState } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";
//Hooks
import { useEventListener } from "hooks/useEventListener";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext);
  const [key, setKey] = useState("");

  useEventListener("keydown", (e: KeyboardEvent) => {
    setKey(e.key);
  });

  const previewText = words.map((elem, i) => (
    <Text key={`${elem} ${i}`}>{elem} </Text>
  ));

  const WordCheker = () => {
    const newText = previewText
      .map((e) => e.props.children[0])
      .join(" ")
      .split("");

    console.log(newText);
  };

  useEffect(() => {
    WordCheker();
  }, [key, previewText]);

  return <Wrapper>{previewText}</Wrapper>;
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
