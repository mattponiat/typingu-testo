import React, { useContext, useRef, useEffect } from "react";
//Components
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
  const focusRef = useRef();
  const { setWordsAmount } = useWordsAmount();
  const [words] = useContext(WordsContext);

  const resetUserInput = () => {
    //Randomizes words in the preview
    for (let i = 0; i < words.length + 1; i++) {
      if (words.length === i) {
        setWordsAmount(i);
      }
    }
  };

  return (
    <Wrapper>
      <Preview />
      <ResetButton>
        <Button onClick={resetUserInput}>Reset</Button>
      </ResetButton>
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

const ResetButton = styled.div`
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
