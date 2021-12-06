import styled from "styled-components";

const StyledCaret = styled.span`
  position: absolute;
  margin: 0;
  padding: 16px 1px;
  background-color: hsl(150, 100%, 40%);
  animation: fading 0.7s infinite alternate;
  word-wrap: break-word;

  @keyframes fading {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`;

export default StyledCaret;
