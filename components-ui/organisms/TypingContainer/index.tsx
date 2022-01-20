import * as React from "react";
//Components
import SetOfButtons from "components-ui/molecules/SetOfButtons";
import Result from "components/Result";
import ResetAndPreview from "components-ui/molecules/ResetAndPreview";
//Styles
import styled from "styled-components";
import { useTypingContext } from "context/TypingCheck";

const TypingContainer: React.FC = () => {
  const { lettersFromWords } = useTypingContext();

  return (
    <Wrapper>
      {lettersFromWords.length === 0 && <Result></Result>}
      <ResetAndPreview />
      <SetOfButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TypingContainer;
