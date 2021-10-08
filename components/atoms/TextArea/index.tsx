import React, { useState } from "react";

export interface TextConfig {
  text: string;
}

const TextArea: React.FC = ({ children, ...props }) => {
  const [text, setText] = useState("");
  return (
    <textarea value={text} onChange={(e) => setText(e.target.value)}>
      {children}
    </textarea>
  );
};

export default TextArea;
