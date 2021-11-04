import * as React from "react";
import { useContext, useEffect, useState, useRef } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";
//Hooks
import { useEventListener } from "hooks/useEventListener";
import { useWordCheker } from "hooks/useWordChecker";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext)!;
  const [lettersFromWords, setLettersFromWords] = useState<string[]>(words);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
  const focusRef = useRef<HTMLDivElement>(null)!;

  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
    setCorrectLetters([]);
    setIncorrectLetters([]);
  }, [words]);

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (lettersFromWords.length) {
      useWordCheker(
        e,
        correctLetters,
        setCorrectLetters,
        incorrectLetters,
        setIncorrectLetters,
        lettersFromWords,
        setLettersFromWords
      );
    }
    if (e.code !== "Enter") {
      focusRef.current?.focus();
      console.log(focusRef);
    }
  });

  return (
    <Wrapper ref={focusRef} tabIndex={0}>
      {correctLetters.map(
        (letter, i) =>
          correctLetters && (
            <CorrectText key={`${letter} ${i}`}>{letter}</CorrectText>
          )
      )}
      {incorrectLetters.map((letter, i) => (
        <IncorrectText key={`${letter} ${i}`}>{letter}</IncorrectText>
      ))}
      <Caret></Caret>
      {lettersFromWords.map((letter, i) => (
        <Text key={`${letter} ${i}`}>{letter}</Text>
      ))}
    </Wrapper>
  );
};

//Styled components

const Wrapper = styled.p`
  position: relative;
  white-space: pre-wrap;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  max-width: 35vw;
  text-align: justify;
  line-height: 27px;

  :focus {
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
  font-size: 25px;
  font-weight: 600;
  word-wrap: break-word;
`;

const IncorrectText = styled(Text)`
  background-color: red;
  color: white;
  word-wrap: break-word;
`;
const CorrectText = styled(Text)`
  color: green;
  word-wrap: break-word;
`;

export default Preview;
