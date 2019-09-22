import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
  0%{
    opacity:0
  }
  25%{
    opacity:1
    transform: rotate(90deg) scale(1.2);
  }
  50%{
    opacity:0
    transform: rotate(180deg);
  }
  75%{
    opacity:1
    transform: rotate(90deg) scale(1.2);
  }
  100%{
    opacity:0
    transform: rotate(0deg);
  }
`;
const Loader = styled.div`
  animation: ${Animation} 2s linear infinite;
`;

export default () => {
  return (
    <Loader>
      <Logo />
    </Loader>
  );
};
