import * as React from "react";
import { useContext } from "react";
//Components
import Preview from "components/Preview";
import SetOfButtons from "components-ui/molecules/SetOfButtons";
import Button from "components-ui/atoms/Button";
import Result from "components/Result";
//Styles
import styled from "styled-components";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Context
import { WordsContext } from "context/WordsContext";
import { useTypingContext } from "context/TypingCheck";

const TypingContainer: React.FC = () => {
  const { setWordsAmount } = useWordsAmount();
  const [words] = useContext(WordsContext)!;
  const { setIsActive, setSeconds, lettersFromWords } = useTypingContext();

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
      {lettersFromWords.length === 0 && <Result></Result>}
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
  min-height: auto;
  margin: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 15px;
  }
`;

export default TypingContainer;
