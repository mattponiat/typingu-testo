import * as React from "react";
//Components
import Button from "components-ui/atoms/Button";
//Styles
import styled from "styled-components";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Context
import { useTypingContext } from "context/TypingCheck";

const SetOfButtons = () => {
  const { setWordsAmount } = useWordsAmount();
  const { setIsActive, setSeconds } = useTypingContext();
  const [wordsState, setWordsState] = React.useState(100);

  //Stop the background timer, randomize and set words to the given amount
  const setAndRestartWords = (amount: number) => {
    setWordsState(amount); //todo change name
    setWordsAmount(amount);
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <Wrapper>
      <StyledButton
        isActive={wordsState === 10}
        onClick={() => setAndRestartWords(10)}
      >
        10
      </StyledButton>
      <StyledButton
        isActive={wordsState === 25}
        onClick={() => setAndRestartWords(25)}
      >
        25
      </StyledButton>
      <StyledButton
        isActive={wordsState === 50}
        onClick={() => setAndRestartWords(50)}
      >
        50
      </StyledButton>
      <StyledButton
        isActive={wordsState === 100}
        onClick={() => setAndRestartWords(100)}
      >
        100
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  max-width: 30rem;
  min-height: auto;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  position: relative;
  color: ${({ isActive }) =>
    isActive ? "hsl(0, 0%, 60%)" : "hsl(150, 100%, 40%)"};
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid hsl(0, 0%, 60%)" : "none"};

  :hover,
  :visited,
  :focus {
    color: hsl(0, 0%, 60%);
  }
`;

export default SetOfButtons;
