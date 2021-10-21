import React from "react";
//Styles
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (e: any) => void;
}

const TextArea: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <TypingArea {...props}></TypingArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  margin: 5px;
`;

const TypingArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;

export default TextArea;
