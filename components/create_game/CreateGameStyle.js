const { default: styled } = require("@emotion/styled");

const Box = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-size: 40px;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    margin: 0px 10px;
    border: 2px solid #00000070;
    box-shadow: 0 0 7px 2px;
    cursor: pointer;
    text-shadow: 0 2px 2px;
    font-weight: 700;
    font-family: "Rubik Scribble", system-ui;
    :hover {
      font-size: 42px;
      background-color: #35d4417d;
    }
  }
`;
export { Box };
