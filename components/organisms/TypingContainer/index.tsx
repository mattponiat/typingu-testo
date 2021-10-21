import React, { useState } from "react";
//Components
import TextArea from "components/atoms/TextArea";
import Preview from "components/atoms/Preview";
import SetOfButtons from "components/molecules/SetOfButtons";
import Button from "components/atoms/Button";
//Styled-components
import styled from "styled-components";

const TypingContainer: React.FC = () => {
  const [text, setText] = useState("");

  const handleUserInput = (e: any) => {
    setText(e.target.value);
  };

  const resetUserInput = () => {
    setText("");
  };

  return (
    <Wrapper>
      <Preview />
      <TextArea value={text} onChange={handleUserInput} />
      <Button onClick={resetUserInput}>Reset</Button>
      <SetOfButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default TypingContainer;
