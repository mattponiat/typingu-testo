import * as React from "react";
import { useState, useEffect } from "react";
//Styles
import styled from "styled-components";
//Context
import { useTypingContext } from "context/TypingCheck";

const Result: React.FC = () => {
  const { correctLetters, seconds } = useTypingContext();
  const [result, setResult] = useState(0);

  //Count words per minute
  useEffect(() => {
    let wpm = Math.round((correctLetters.length / 5 / seconds) * 60);
    setResult(wpm);
  }, [seconds]);

  return (
    <Wrapper>
      <Content>Wpm: {result}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: auto;
  width: 10rem;
  margin-bottom: 20px;
`;

const Content = styled.span`
  font-size: 25px;
`;

export default Result;
