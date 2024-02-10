const { default: styled } = require("@emotion/styled");
import { keyframes } from "@emotion/react";
const actived = keyframes`
    0%{
       opacity: 0;
    }
    20%{
      opacity: 1.2;
    }
    40%{
      opacity: 1.4;
    }
    60%{
      opacity: 1.6;
    }
    80%{
      opacity: 1.8;
    }
    100%{
      opacity: 1;
    }
`;
const Content = styled.div`
  height: 288px;
  &.active {
    animation: 4s ${actived};
  }
  & .nav {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    button {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 20px 0px;
      display: block;
      color: black;
      height: 80px;
      cursor: pointer;
      font-size: 40px;
      font-family: "Protest Riot", sans-serif;
      text-decoration-line: none;
      &:hover {
        font-size: 45px;
      }
    }
  }
`;
export { Content };
