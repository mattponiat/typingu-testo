import * as React from "react";
import { useState, useEffect } from "react";
//Styles
import styled from "styled-components";
//Context
import { useTypingContext } from "context/TypingCheck";

const Result: React.FC = () => {
  const { correctLetters, lettersFromWords, seconds, setIsActive } =
    useTypingContext();
  const [result, setResult] = useState(0);

  useEffect(() => {
    let wpm = Math.round((correctLetters.length / 5 / seconds) * 60);
    setResult(wpm);
  }, [seconds]);

  // wpm: total number of characters (including spaces) of words you got right divided by five
  // then divided by the time starting from first character typed

  return (
    <Wrapper>
      <Content>Your total wpm is: {result}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.span``;

export default Result;
