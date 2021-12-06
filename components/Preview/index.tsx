import * as React from "react";
import { useRef, useEffect } from "react";
//Components
import StyledCorrectText from "components-ui/atoms/StyledCorrectText";
import StyledIncorrectText from "components-ui/atoms/StyledIncorrectText";
import StyledText from "components-ui/atoms/StyledText";
import StyledCaret from "components-ui/atoms/StyledCaret";
//Styles
import styled from "styled-components";
//Context
import { useTypingContext } from "context/store";

const Preview: React.FC = () => {
  const focusRef = useRef<HTMLDivElement>(null)!;
  const { correctLetters, incorrectLetters, lettersFromWords } =
    useTypingContext();

  return (
    <Wrapper ref={focusRef} tabIndex={0}>
      {/* <div>{seconds}</div> */}
      <StyledCorrectText>
        {correctLetters && correctLetters.join("")}
      </StyledCorrectText>
      <StyledIncorrectText>
        {incorrectLetters && incorrectLetters.join("")}
      </StyledIncorrectText>
      <StyledCaret />
      <StyledText>{lettersFromWords.join("")}</StyledText>
    </Wrapper>
  );
};

//Styled components

const Wrapper = styled.div`
  position: relative;
  margin: 5px;
  max-width: 35rem;
  font-size: 30px;
  line-height: 30px;
  white-space: pre-wrap;
  overflow: clip;

  :focus-visible {
    outline: none;
  }
`;

export default Preview;
