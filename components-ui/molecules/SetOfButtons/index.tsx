import * as React from "react";
//Components
import Button from "components-ui/atoms/Button";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Styles
import styled from "styled-components";
import { useTypingContext } from "context/TypingCheck";

const SetOfButtons = () => {
  const { setWordsAmount } = useWordsAmount();
  const { setIsActive, setSeconds } = useTypingContext();
  const [wordsState, setWordsState] = React.useState(100);

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
  align-items: center;
  width: 15vw;
  min-height: auto;
  margin-top: 20px;

  button:hover,
  button:visited,
  button:focus {
    color: hsl(0, 0%, 60%);
  }
`;

const StyledButton = styled(Button)`
  color: ${({ isActive }) =>
    isActive ? "hsl(0, 0%, 60%)" : "hsl(150, 100%, 40%)"};
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid hsl(0, 0%, 60%)" : "none"};
`;

export default SetOfButtons;
