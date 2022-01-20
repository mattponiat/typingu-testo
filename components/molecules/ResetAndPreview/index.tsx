import * as React from "react";
//Components
import Preview from "components/molecules/Preview";
import Button from "components-ui/atoms/Button";
//Styles
import styled from "styled-components";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Context
import { useWordsContext } from "context/WordsContext";
import { useTypingContext } from "context/TypingCheck";

const ResetAndPreview: React.FC = () => {
  const { setWordsAmount } = useWordsAmount();
  const [wordsContext] = useWordsContext();
  const { setIsActive, setSeconds } = useTypingContext();

  //Stop the background timer, randomize and restart words
  const restartTest = () => {
    for (let i = 0; i < wordsContext.length + 1; i++) {
      if (wordsContext.length === i) {
        setWordsAmount(i);
        setIsActive(false);
        setSeconds(0);
      }
    }
  };

  return (
    <Wrapper>
      <Preview />
      <Button onClick={restartTest}>Redo</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: auto;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 15px;
    font-size: 20px;
  }
`;

export default ResetAndPreview;
