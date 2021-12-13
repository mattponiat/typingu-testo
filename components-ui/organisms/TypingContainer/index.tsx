import * as React from "react";
import { useContext } from "react";
//Components
import Preview from "components/Preview";
import SetOfButtons from "components-ui/molecules/SetOfButtons";
import Button from "components-ui/atoms/Button";
//Styles
import styled from "styled-components";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Context
import { WordsContext } from "context/WordsContext";
import { useTypingContext } from "context/store";

const TypingContainer: React.FC = () => {
  const { setWordsAmount } = useWordsAmount();
  const [words] = useContext(WordsContext)!;
  const { setIsActive, setSeconds } = useTypingContext();

  //Randomize and restart words
  const restartTest = () => {
    for (let i = 0; i < words.length + 1; i++) {
      if (words.length === i) {
        setWordsAmount(i);
        setIsActive(false);
        setSeconds(0);
      }
    }
  };

  return (
    <Wrapper>
      <ResetAndPreview>
        <Preview />
        <Button onClick={restartTest}>Redo</Button>
      </ResetAndPreview>
      <SetOfButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResetAndPreview = styled.div`
  margin: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

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

  button:hover,
  button:focus-visible {
    color: hsl(0, 0%, 60%);
  }
`;

export default TypingContainer;
