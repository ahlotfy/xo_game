import React from "react";
import { Title, Buttons } from "./ModalSectionStyle";
const TheMatchWasTied = ({
  changeNav,
  handleModalResponse,
  resetSessionStorage,
}: any) => {
  return (
    <div>
      <Title>The Match Was Tied</Title>
      <Buttons>
        <button
          onClick={() => {
            changeNav("menu");
            resetSessionStorage();
          }}
        >
          Menu
        </button>
        <button onClick={() => handleModalResponse("restart_game")}>
          Restart Game
        </button>
      </Buttons>
    </div>
  );
};

export default TheMatchWasTied;
