import * as React from "react";
import { useRef } from "react";
//Components
import CorrectText from "components-ui/atoms/CorrectText";
import IncorrectText from "components-ui/atoms/IncorrectText";
import Text from "components-ui/atoms/Text";
import Caret from "components-ui/atoms/Caret";
//Styles
import styled from "styled-components";
//Hooks
import { useEventListener } from "hooks/useEventListener";
//Context
import { useTypingContext } from "context/TypingCheck";

const Preview: React.FC = () => {
  const focusRef = useRef<HTMLDivElement>(null)!;
  const { lettersFromWords, correctLetters, incorrectLetters } =
    useTypingContext();

  //Event listener for focusing the Wrapper div
  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Tab") {
      focusRef.current?.focus();
    }
  });

  return (
    <Wrapper ref={focusRef} tabIndex={0}>
      <CorrectText>{correctLetters && correctLetters.join("")}</CorrectText>
      <IncorrectText>
        {incorrectLetters && incorrectLetters.join("")}
      </IncorrectText>
      <Caret />
      <Text>{lettersFromWords.join("")}</Text>
    </Wrapper>
  );
};

// components

const Wrapper = styled.div`
  min-height: auto;
  max-width: 35rem;
  font-size: 30px;
  white-space: pre-wrap;

  :focus-visible {
    outline: none;
  }
`;

export default Preview;
