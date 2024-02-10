import React from "react";
import { Nav } from "../GlobalStyle";
const Menu = ({ changeNav, setMusic }: any) => {
  const handleClick = (v: string) => {
    changeNav(v);
    setMusic(true);
  };
  return (
    <Nav>
      <button onClick={() => handleClick("start")}>Start</button>
      <button onClick={() => handleClick("settings")}>Settings</button>
    </Nav>
  );
};

export default Menu;
