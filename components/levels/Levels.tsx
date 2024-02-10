import React from "react";
import { Nav } from "../GlobalStyle";
import { useDispatch } from "react-redux";
import { setDifficultyLevel } from "@/redux/level/Level";

const Levels = ({ changeNav }: any) => {
  const dispatch = useDispatch();
  const handleLevel = (level: string) => {
    dispatch(setDifficultyLevel(level));
    changeNav("create_game");
  };
  return (
    <Nav>
      <button onClick={() => handleLevel("easy")}>Eazy</button>
      <button onClick={() => handleLevel("medium")}>Medium</button>
      <button onClick={() => handleLevel("hard")}>Hard</button>
      <button onClick={() => changeNav("create_game")}>Back</button>
    </Nav>
  );
};

export default Levels;
