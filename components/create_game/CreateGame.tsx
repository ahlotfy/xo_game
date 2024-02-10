import React, { useState } from "react";
import { Nav } from "../GlobalStyle";
import { Box } from "./CreateGameStyle";
import { setGamePause, setGameStart } from "@/redux/gameState/gameState";
import { useDispatch } from "react-redux";
import { setStartWithSymbol } from "@/redux/startWithSymbol/StartWithSymbol";
const CreateGame = ({ changeNav }: any) => {
  const dispatch = useDispatch();
  const handleSelect = (v: string) => {
    changeNav("game");
    dispatch(setStartWithSymbol(v));
    dispatch(setGameStart(true));
    dispatch(setGamePause(false));
  };
  return (
    <Nav>
      <Box>
        <button onClick={() => handleSelect("X")}>X</button>
        <button onClick={() => handleSelect("O")}>O</button>
      </Box>
      <button onClick={() => handleSelect("random")}>Random Start</button>
      <button onClick={() => changeNav("start")}>Back</button>
    </Nav>
  );
};

export default CreateGame;
