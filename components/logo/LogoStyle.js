import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
const actived = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  span {
    display: block;
    font-size: 170px;
    line-height: 1;
    font-family: "Rubik Scribble", system-ui;
    animation: 3s ${actived} 2s infinite;
    cursor: default;
    &.x {
      text-shadow: 4px -2px 9px red;
    }
    &.o {
      text-shadow: 4px -2px 9px blue;
    }
  }
`;
export { Title };
