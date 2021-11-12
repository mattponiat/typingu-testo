import * as React from "react";
import { useContext, useRef } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";
//Hooks
import { useTyping } from "hooks/useTyping";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext)!;
  const focusRef = useRef<HTMLDivElement>(null)!;

  const { correctLetters, incorrectLetters, lettersFromWords } = useTyping(
    focusRef,
    words
  );

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

//Styled components

const Wrapper = styled.div`
  position: relative;
  white-space: pre-wrap;
  border-radius: 5px;
  margin: 5px;
  max-width: 35rem;
  line-height: 27px;

  :focus-visible {
    outline: none;
  }
`;

const Caret = styled.span`
  position: absolute;
  margin: 0;
  padding: 15px 1px;
  background-color: hsl(150, 100%, 40%);
  animation: fading 0.7s infinite alternate;
  word-wrap: break-word;

  @keyframes fading {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`;

const Text = styled.span`
  font-size: 28px;
  font-weight: 600;
  word-wrap: break-word;
`;

const IncorrectText = styled(Text)`
  position: absolute;
  min-height: auto;
  background-color: red;
  color: white;
  word-wrap: break-word;
`;
const CorrectText = styled(Text)`
  color: green;
  word-wrap: break-word;
`;

export default Preview;
