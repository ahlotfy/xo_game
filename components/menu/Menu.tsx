import React from "react";
import { Nav } from "../GlobalStyle";
const Menu = ({ changeNav }: any) => {
  return (
    <Nav>
      <button onClick={() => changeNav("start")}>Start</button>
      <button onClick={() => changeNav("settings")}>Settings</button>
    </Nav>
  );
};

export default Menu;
