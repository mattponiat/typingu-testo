import React, { useContext } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext);

  const previewText = words.map((elem, i) => (
    <Text key={`${elem} ${i}`}>{elem} </Text>
  ));

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
