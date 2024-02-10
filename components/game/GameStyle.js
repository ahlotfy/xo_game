import { keyframes } from "@emotion/react";
const { default: styled } = require("@emotion/styled");
const running = keyframes`
0%{
    opacity: 0;
}
20%{
    opacity: 0.2;
}
40%{
    opacity: 0.4;
}
60%{
    opacity:0.6;
}
80%{
    opacity: 0.8;
}
100%{
    opacity: 0;
}
`;
const Content = styled.div`
  width: 100%;
  height: 458px;
  padding: 5px;
`;
const Header = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  span.anticon-bars {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #00000030;
    box-shadow: 0 0 5px 0px;
    svg {
      width: 32px;
      height: 29px;
    }
  }
`;
const GameState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  p {
    width: 30px;
    padding: 0px 10px;
    font-family: "Rubik Scribble", system-ui;
    text-shadow: 0 1px 1px;
    font-weight: 700;
    font-size: 24px;
  }
  sub {
    font-size: 16px;
    font-family: "Protest Riot", sans-serif;
    span {
      opacity: 0;
    }
    span.first_dot {
      animation: 3s ${running} 1s infinite;
    }
    span.second_dot {
      animation: 3s ${running} 2s infinite;
    }
    span.third_dot {
      animation: 3s ${running} 3s infinite;
    }
  }
`;
const GameDetials = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid #434343b5;
  border-radius: 10px;
  box-shadow: 0 0 3px 0;
`;
const MatchResults = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 2px solid #434343b5;
  & div {
    display: flex;
    flex-wrap: wrap;
    p {
      padding: 0px 5px;
      font-family: "Rubik Scribble", system-ui;
      text-shadow: 0 1px 1px;
      font-weight: 700;
    }
  }
`;
const Timer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Protest Riot", sans-serif;
`;
const Body = styled.div`
  height: calc(100% - 35px);
  padding: 10px 0px 5px;
  & div {
    display: flex;
    width: 100%;
    height: calc(100% / 3);
    border: 2px solid #434343b5;
    &.top {
      border-bottom: none;
    }
    &.bottom {
      border-top: none;
    }
  }
  button {
    font-family: "Rubik Scribble", system-ui;
    text-shadow: 0 2px 2px;
    font-weight: 700;
    font-size: 70px;
    transition: 0.5s background-color;
    height: 100%;
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    &.center {
      border-left: 2px solid #434343b5;
      border-right: 2px solid #434343b5;
      border-top: none;
      border-bottom: none;
    }
    :hover {
      background-color: #00000030;
    }
    :disabled {
      color: #000;
      background-color: #e4e4e4;
      cursor: default;
    }
  }
`;
export { Content, Header, GameState, GameDetials, MatchResults, Timer, Body };
