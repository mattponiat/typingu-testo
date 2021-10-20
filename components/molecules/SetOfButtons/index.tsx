import React from "react";
//Components
import Button from "components/atoms/Button";
//Hooks
import { useWordsAmount } from "hooks/useWordsAmount";

const SetOfButtons = () => {
  const { setWordsAmount } = useWordsAmount();
  return (
    <div>
      <Button onClick={() => setWordsAmount(10)}>10</Button>
      <Button onClick={() => setWordsAmount(25)}>25</Button>
      <Button onClick={() => setWordsAmount(50)}>50</Button>
      <Button onClick={() => setWordsAmount(100)}>100</Button>
      {/* <Button onClick={() => resetWords()}>Reset</Button> */}
    </div>
  );
};

export default SetOfButtons;
