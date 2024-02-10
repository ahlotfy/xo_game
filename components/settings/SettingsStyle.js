const { default: styled } = require("@emotion/styled");
const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  button.special,
  label {
    background-color: transparent;
    outline: none;
    border: none;
    display: block;
    color: black;
    height: 30px;
    cursor: pointer;
    font-size: 24px;
    font-family: "Protest Riot", sans-serif;
    text-decoration-line: none;
    width: 200px;
    sub {
      font-family: sans-serif;
      font-size: 18px;
    }
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  & button,
  select {
    display: block;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 30px;
    width: 100px;
    cursor: pointer;
    text-decoration-line: none;
    font-size: 20px;
    font-weight: bold;
  }
  & button {
    &.on {
      color: #00a500;
    }
    &.off {
      color: red;
    }
  }
`;
export { Content, Box };
