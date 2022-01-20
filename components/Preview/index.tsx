import * as React from "react";
import { useRef } from "react";
//Components
import CorrectText from "components-ui/atoms/CorrectText";
import IncorrectText from "components-ui/atoms/IncorrectText";
import Text from "components-ui/atoms/Words";
import Caret from "components-ui/atoms/Caret";
import Word from "components-ui/atoms/Word";
//Styles
import styled from "styled-components";
//Hooks
import { useEventListener } from "hooks/useEventListener";
//Context
import { useTypingContext } from "context/TypingCheck";

const Preview: React.FC = () => {
  const focusRef = useRef<HTMLDivElement>(null)!;
  const { correctLetters, incorrectLetters, words } = useTypingContext();

  //Event listener for focusing the Wrapper div
  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Tab") {
      focusRef.current?.focus();
    }
  });

  return (
    <Wrapper ref={focusRef} tabIndex={0}>
      <IncorrectText>
        {incorrectLetters && incorrectLetters.join("")}
      </IncorrectText>
      <Text>
        <CorrectText>{correctLetters && correctLetters.join("")}</CorrectText>
        <Caret />
        {words.map((elem, index) => {
          return (
            <Word key={`${elem}-${index + 1}`}>
              <span>{elem}</span>
            </Word>
          );
        })}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  font-size: 30px;
  white-space: pre-wrap;

  :focus-visible {
    outline: none;
  }
`;

export default Preview;
