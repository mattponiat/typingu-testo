import * as React from "react";
//Components
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";
//Styles
import styled from "styled-components";

const CapsLockAlert: React.FC = () => {
  return (
    <Wrapper>
      <ReactIsCapsLockActive>
        {(active: boolean) => {
          return active ? <Alert>Caps Lock is on</Alert> : "";
        }}
      </ReactIsCapsLockActive>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Alert = styled.span`
  color: #861400;
  font-weight: 800;
  font-size: 25px;
`;

export default CapsLockAlert;
