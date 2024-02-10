import React from "react";
import { Title, Buttons } from "./ModalSectionStyle";
const Pause = ({
  changeNav,
  handleModalResponse,
  resetSessionStorage,
}: any) => {
  return (
    <div>
      <Title>Pause</Title>
      <Buttons>
        <button
          onClick={() => {
            changeNav("menu");
            resetSessionStorage();
          }}
        >
          Menu
        </button>
        <button onClick={() => handleModalResponse("continue")}>
          Continue
        </button>
      </Buttons>
    </div>
  );
};

export default Pause;
