import React from "react";
import TextArea from "components/atoms/TextArea";
//Components
import Preview from "components/atoms/Preview";
import SetOfButtons from "components/molecules/SetOfButtons";

const TypingContainer: React.FC = () => {
  return (
    <>
      <Preview />
      <TextArea />
      <SetOfButtons />
    </>
  );
};

export default TypingContainer;
