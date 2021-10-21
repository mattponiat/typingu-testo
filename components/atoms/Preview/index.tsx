import React, { useContext } from "react";
import styled from "styled-components";
import { WordsContext } from "context/WordsContext";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext);

  return (
    <Wrapper>
      {words.map((elem, i) => (
        <span key={elem + i}>{elem} </span>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;

  span {
    font-size: 16px;
  }
`;

export default Preview;
