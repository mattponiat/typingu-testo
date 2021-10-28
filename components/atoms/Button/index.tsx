import * as React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  ref?: any;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};

export default Button;
