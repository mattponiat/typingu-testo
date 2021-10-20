import React from "react";

interface Props {
  value: string;
  onChange?: (e: any) => void;
}

const TextArea: React.FC<Props> = (...props) => {
  return (
    <>
      <textarea defaultValue="" {...props} />
    </>
  );
};

export default TextArea;
