import React from "react";
import { Nav } from "../GlobalStyle";
import { useDispatch } from "react-redux";
import { setPlayWithReducer } from "@/redux/playWith/PlayWith";
const Start = ({ changeNav }: any) => {
  const dispatch = useDispatch();
  const handleClick = (v: string) => {
    sessionStorage.setItem(
      "score",
      JSON.stringify([
        {
          x: 0,
          o: 0,
        },
      ])
    );
    dispatch(setPlayWithReducer(v));
    if (v === "computer") {
      changeNav("level");
    } else {
      changeNav("create_game");
    }
  };
  return (
    <Nav>
      <button onClick={() => handleClick("computer")}>Computer</button>
      <button onClick={() => handleClick("friend")}>Friend</button>
      <button onClick={() => changeNav("menu")}>Back</button>
    </Nav>
  );
};

export default Start;
