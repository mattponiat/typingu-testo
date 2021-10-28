import React, { useContext, useEffect, useState } from "react";
//Styles
import styled from "styled-components";
//Context
import { WordsContext } from "context/WordsContext";
//Hooks
import { useEventListener } from "hooks/useEventListener";

const Preview: React.FC = () => {
  const [words] = useContext(WordsContext);
  const [lettersFromWords, setLettersFromWords] = useState<string[]>(
    words.join(" ").split("")
  );
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
    if (incorrectLetters.length > 0) {
      if (e.code === "Backspace") {
        const incorrectLettersCopy = [...incorrectLetters];
        incorrectLettersCopy.pop();
        setIncorrectLetters(incorrectLettersCopy);
      }
    }
    const key = e.key;
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
    <Wrapper>
      {correctLetters.map((letter, i) => (
        <CorrectText key={letter + i}>{letter}</CorrectText>
      ))}
      {incorrectLetters.map((letter, i) => (
        <IncorrectText key={letter + i}>{letter}</IncorrectText>
      ))}
      <Caret></Caret>
      {lettersFromWords
        .join("")
        .split("")
        .map((elem, i) => (
          <Text key={`${elem} ${i}`}>{elem}</Text>
        ))}
    </Wrapper>
  );
};

//Styled components
const Caret = styled.span`
  position: absolute;
  margin: 0;
  padding: 15px 1px;
  border: 1px solid hsl(150, 100%, 40%);
  border-radius: 5px;
  background-color: hsl(150, 100%, 40%);
  animation: fading 0.7s infinite alternate;

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
  font-size: 20px;
  font-weight: 600;
`;

const IncorrectText = styled(Text)`
  background-color: red;
  color: white;
`;
const CorrectText = styled(Text)`
  color: green;
`;

const Wrapper = styled.pre`
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  border: none;
  border-radius: 5px;
  width: 40vw;
  text-align: justify;
  line-height: 27px;
`;

export default Preview;
