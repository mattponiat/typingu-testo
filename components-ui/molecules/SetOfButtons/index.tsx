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

  const setAndRestartWords = (amount: number) => {
    setWordsAmount(amount);
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <Wrapper>
      <Button onClick={() => setAndRestartWords(10)}>10</Button>
      <Button onClick={() => setAndRestartWords(25)}>25</Button>
      <Button onClick={() => setAndRestartWords(50)}>50</Button>
      <Button onClick={() => setAndRestartWords(100)}>100</Button>
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

  button {
    border: none;
    background: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    color: hsl(150, 100%, 40%);
  }

  button:hover,
  button:visited,
  button:focus {
    color: hsl(0, 0%, 60%);
  }
`;

export default SetOfButtons;
