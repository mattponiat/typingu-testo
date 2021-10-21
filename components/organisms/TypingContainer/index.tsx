import React, { useContext, useEffect, useState } from "react";
//Components
import TextArea from "components/atoms/TextArea";
import Preview from "components/atoms/Preview";
import SetOfButtons from "components/molecules/SetOfButtons";
import Button from "components/atoms/Button";
//Styles
import styled from "styled-components";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Context
import { WordsContext } from "context/WordsContext";

const TypingContainer: React.FC = () => {
  const [text, setText] = useState("");
  const { setWordsAmount } = useWordsAmount();
  const [words] = useContext(WordsContext);

  const handleUserInput = (e: any) => {
    setText(e.target.value);
  };

  const resetUserInput = () => {
    setText("");

    for (let i = 1; i < words.length; i++) {
      if (words.length === i + 1) {
        setWordsAmount(i + 1);
      }
    }
  };

  return (
    <Wrapper>
      <Preview />
      <TextAndReset>
        <TextArea value={text} onChange={handleUserInput} />
        <Button onClick={resetUserInput}>Reset</Button>
      </TextAndReset>
      <SetOfButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextAndReset = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    background: none;
    padding: 5px 10px;
    margin: 3px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default TypingContainer;
