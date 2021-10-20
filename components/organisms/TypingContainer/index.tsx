import React, { useState } from "react";
import TextArea from "components/atoms/TextArea";
//Components
import Preview from "components/atoms/Preview";
import SetOfButtons from "components/molecules/SetOfButtons";

const TypingContainer: React.FC = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Preview />
      <TextArea value={text} onChange={(e) => setText(e.target.value)} />
      <SetOfButtons />
    </>
  );
};

export default TypingContainer;
