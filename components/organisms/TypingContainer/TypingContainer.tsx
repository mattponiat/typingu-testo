import React from "react";
import TextArea from "components/atoms/TextArea";
import Preview from "components/atoms/Preview";
import Button from "components/atoms/Button";
import { useWordsAmount } from "hooks/useWordsAmount";

const TypingContainer: React.FC = () => {
  const { setWordsAmount } = useWordsAmount();
  return (
    <>
      <Preview />
      <TextArea />
      <Button onClick={() => setWordsAmount(10)}>10</Button>
      <Button onClick={() => setWordsAmount(25)}>25</Button>
      <Button onClick={() => setWordsAmount(50)}>50</Button>
      <Button onClick={() => setWordsAmount(100)}>100</Button>
    </>
  );
};

export default TypingContainer;
