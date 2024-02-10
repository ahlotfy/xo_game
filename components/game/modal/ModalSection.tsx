import React from "react";
import { Modal } from "antd";
import Pause from "./Pause";
import Won from "./Won";
import TheMatchWasTied from "./TheMatchWasTied";
import { setGamePause } from "@/redux/gameState/gameState";
import { useDispatch } from "react-redux";

const ModalSection = ({
  isModalOpen,
  setIsModalOpen,
  changeNav,
  modalType,
  handleModalResponse,
  winner,
  disabledNextGame,
}: any) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(setGamePause(false));
  };
  const resetSessionStorage = () => {
    sessionStorage.setItem(
      "score",
      JSON.stringify([
        {
          x: 0,
          o: 0,
        },
      ])
    );
  };
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      centered
      mask
    >
      {modalType === "won" ? (
        <Won
          changeNav={changeNav}
          handleModalResponse={handleModalResponse}
          winner={winner}
          resetSessionStorage={resetSessionStorage}
          disabledNextGame={disabledNextGame}
        />
      ) : modalType === "tied" ? (
        <TheMatchWasTied
          changeNav={changeNav}
          handleModalResponse={handleModalResponse}
          resetSessionStorage={resetSessionStorage}
        />
      ) : (
        <Pause
          changeNav={changeNav}
          handleModalResponse={handleModalResponse}
          resetSessionStorage={resetSessionStorage}
        />
      )}
    </Modal>
  );
};

export default ModalSection;
