import * as React from "react";
//Components
import Button from "components/atoms/Button";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";
//Styles
import styled from "styled-components";

const SetOfButtons = () => {
  const { setWordsAmount } = useWordsAmount();
  return (
    <Wrapper>
      <Button onClick={() => setWordsAmount(10)}>10</Button>
      <Button onClick={() => setWordsAmount(25)}>25</Button>
      <Button onClick={() => setWordsAmount(50)}>50</Button>
      <Button onClick={() => setWordsAmount(100)}>100</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  min-height: auto;
  margin: 3px;

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
  button:visited,
  button:focus {
    color: hsl(0, 0%, 60%);
  }
`;

export default SetOfButtons;
