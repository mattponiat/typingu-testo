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
  const focusRef = useRef<HTMLDivElement>(null);
  const { setWordsAmount } = useWordsAmount();
  const [words] = useContext(WordsContext);

  const handleFocus = () => {
    if (null !== focusRef.current) {
      focusRef.current.focus();
    }
  };

  const restartTest = () => {
    //Randomizes words in the preview
    for (let i = 0; i < words.length + 1; i++) {
      if (words.length === i) {
        setWordsAmount(i);
      }
    }
  };

  useEffect(() => {
    handleFocus();
  }, [words]);

  return (
    <Wrapper>
      <ResetButton>
        <Preview />
        <Button
          onClick={() => {
            handleFocus();
            restartTest();
          }}
        >
          Redo
        </Button>
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
    margin-left: 15px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    color: hsl(150, 100%, 40%);
  }
`;

export default TypingContainer;
