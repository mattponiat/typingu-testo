import styled from "styled-components";

const Caret = styled.span`
  position: absolute;
  margin: 0;
  height: 2.3rem;
  width: 2px;
  background-color: hsl(150, 100%, 30%);
  animation: fading 1s infinite;
  word-wrap: break-word;

  @keyframes fading {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export default Caret;
