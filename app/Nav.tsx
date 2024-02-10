import Game from "@/components/game/Game";
import Logo from "@/components/logo/Logo";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "./NavStyle";
import Menu from "@/components/menu/Menu";
import Start from "@/components/start/Start";
import Setting from "@/components/settings/Settings";
import CreateGame from "@/components/create_game/CreateGame";
import Levels from "@/components/levels/Levels";
import { setNav } from "@/redux/nav/Nav";

const Nav = () => {
  const nav = useSelector((state: any) => state.navReducer.nav);
  const [active, setActive] = useState(0);
  const [runMusic, setMusic] = useState(false);
  const isMusic = useSelector((state: any) => state.soundReducer.isMusic);
  document?.addEventListener("click", () => {
    setMusic(true);
  });
  const dispatch = useDispatch();
  const changeNav = (e: any) => {
    dispatch(setNav(e));
    setActive(1);
    setTimeout(() => {
      setActive(0);
    }, 1000);
  };
  return (
    <div>
      {runMusic && (
        <audio loop autoPlay muted={!isMusic} hidden>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/music-80552.appspot.com/o/xo.mp3?alt=media&token=07d65764-cec0-49d6-a60a-ace51fc05d3e"
            type="audio/mpeg"
          />
        </audio>
      )}
      {nav === "game" ? (
        <Game changeNav={changeNav} />
      ) : (
        <>
          <Logo />
          <Content className={active == 1 ? "active" : ""}>
            {nav === "menu" ? (
              <Menu changeNav={changeNav} />
            ) : nav === "start" ? (
              <Start changeNav={changeNav} />
            ) : nav === "settings" ? (
              <Setting changeNav={changeNav} />
            ) : nav === "create_game" ? (
              <CreateGame changeNav={changeNav} />
            ) : nav === "level" ? (
              <Levels changeNav={changeNav} />
            ) : (
              <Menu changeNav={changeNav} />
            )}
          </Content>
        </>
      )}
    </div>
  );
};

export default Nav;
