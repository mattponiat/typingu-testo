import * as React from "react";
import { useContext, useEffect, useState } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";
//Hooks
import { useEventListener } from "hooks/useEventListener";

const Preview: React.FC = (...props) => {
  const [words] = useContext(WordsContext)!;
  const [lettersFromWords, setLettersFromWords] = useState<string[]>(words);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);

  useEffect(() => {
    setLettersFromWords(words.join(" ").split(""));
    setCorrectLetters([]);
    setIncorrectLetters([]);
  }, [words]);

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (lettersFromWords.length) {
      WordCheker(e);
    }
  });

  const WordCheker = (e: KeyboardEvent) => {
    const key = e.key;

    if (incorrectLetters.length > 0) {
      if (key === "Backspace" || key === "Delete") {
        const incorrectLettersCopy = [...incorrectLetters];
        incorrectLettersCopy.pop();
        setIncorrectLetters(incorrectLettersCopy);
      }
    }

    if (e.code.slice(0, 3) !== "Key" && e.code.slice(0, 3) !== "Spa") return;

    if (key === lettersFromWords[0] && incorrectLetters.length === 0) {
      const remainingLetters = [...lettersFromWords];
      remainingLetters.shift();
      setLettersFromWords([...remainingLetters]);
      const correctLettersCopy = [...correctLetters];
      correctLettersCopy.push(key);
      setCorrectLetters(correctLettersCopy);
    } else {
      const incorrectLettersCopy = [...incorrectLetters];
      incorrectLettersCopy.push(key);
      setIncorrectLetters(incorrectLettersCopy);
    }
  };

  return (
    <Wrapper {...props}>
      {correctLetters.map((letter, i) => (
        <CorrectText key={`${letter} ${i}`}>{letter}</CorrectText>
      ))}
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
