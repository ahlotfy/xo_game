import React from "react";
import { Title, Buttons, Winner } from "./ModalSectionStyle";
import { Image } from "antd";
import Crown from "../../../imgs/Crown.png";
const Won = ({
  changeNav,
  handleModalResponse,
  winner,
  resetSessionStorage,
}: any) => {
  return (
    <div>
      <Winner>
        <Image src={Crown?.src} loading="lazy" preview={false} />
        <p>{winner}</p>
      </Winner>
      <Title>Won</Title>
      <Buttons>
        <button
          onClick={() => {
            changeNav("menu");
            resetSessionStorage();
          }}
        >
          Menu
        </button>
        <button onClick={() => handleModalResponse("next_game")}>
          Next Game
        </button>
      </Buttons>
    </div>
  );
};

export default Won;
