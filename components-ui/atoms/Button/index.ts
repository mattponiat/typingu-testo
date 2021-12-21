import styled from "styled-components";

type ButtonProps = {
  isActive?: boolean;
};

const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 17px;
  color: hsl(150, 100%, 40%);

  :hover,
  :focus {
    color: hsl(0, 0%, 60%);
  }
`;
export default Button;
