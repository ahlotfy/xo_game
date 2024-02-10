const { default: styled } = require("@emotion/styled");

const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 40px;
  font-size: 40px;
  font-family: "Protest Riot", sans-serif;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  & button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
`;
const Winner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 20px 0px;
    font-size: 70px;
    line-height: 24px;
    font-family: "Rubik Scribble", system-ui;
    text-shadow: 0px 1px 4px #886a6a;
    font-weight: 700;
  }
  & .ant-image {
    width: 300px;
    /* & img {
    } */
  }
`;
export { Title, Buttons, Winner };
