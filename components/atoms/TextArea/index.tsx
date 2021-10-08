import React, { useState } from "react";

const TextArea: React.FC = () => {
  const [text, setText] = useState("");
  return (
    <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
  );
};

export default TextArea;
