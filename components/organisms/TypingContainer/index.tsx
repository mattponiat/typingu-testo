import * as React from "react";
//Components
import SetOfButtons from "components/molecules/SetOfButtons";
import Result from "components/atoms/Result";
import ResetAndPreview from "components/molecules/ResetAndPreview";
import CapsLockAlert from "components/atoms/CapsLockAlert";
//Styles
import styled from "styled-components";
//Context
import { useTypingContext } from "context/TypingCheck";

const TypingContainer: React.FC = () => {
  const { lettersFromWords } = useTypingContext();

  return (
    <>
      <Wrapper>
        <AlertWrapper>
          <CapsLockAlert />
        </AlertWrapper>
        {lettersFromWords.length === 0 && <Result />}
        <ResetAndPreview />
        <SetOfButtons />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlertWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin: 0 4.5rem 3rem 0;
`;

export default TypingContainer;
