const { default: styled } = require("@emotion/styled");
const Nav = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 5px 0px;
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
`;
export { Nav };
