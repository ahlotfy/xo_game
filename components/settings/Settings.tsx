import React from "react";
import { Content, Box } from "./SettingsStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountDown,
  setIsTimer,
} from "@/redux/timerCountDown/timerCountDown";
import { setIsMusic, setIsSoundEffect } from "@/redux/sound/Sounds";
const Setting = ({ changeNav }: any) => {
  const isSoundEffect = useSelector(
    (state: any) => state.soundReducer.isSoundEffect
  );
  const isMusic = useSelector((state: any) => state.soundReducer.isMusic);
  const dispatch = useDispatch();
  const isTimer = useSelector(
    (state: any) => state.timerCountDownReducer.isTimer
  );
  return (
    <Content>
      {/* Start Music */}
      <Box>
        <label>Music</label>
        <button
          className={isMusic ? "on" : "off"}
          onClick={() => dispatch(setIsMusic(!isMusic))}
        >
          {isMusic ? "ON" : "OFF"}
        </button>
      </Box>
      {/* End Music */}

      {/* Start Sound */}
      <Box>
        <label>Sound</label>
        <button
          className={isSoundEffect ? "on" : "off"}
          onClick={() => dispatch(setIsSoundEffect(!isSoundEffect))}
        >
          {isSoundEffect ? "ON" : "OFF"}
        </button>
      </Box>
      {/* End Sound */}

      {/* Start Time */}
      <Box>
        <label>Timer</label>
        <button
          className={isTimer ? "on" : "off"}
          onClick={() => dispatch(setIsTimer(!isTimer))}
        >
          {isTimer ? "ON" : "OFF"}
        </button>
      </Box>
      {/* End Time */}

      {/* Start Timer */}
      <Box>
        <label>
          CountDown <sub>(Min)</sub>
        </label>
        <div>
          <select
            onChange={(e: any) => dispatch(setCountDown(e.target.value))}
            disabled={!isTimer}
            defaultValue="120"
          >
            <option value="60">1</option>
            <option value="120">2</option>
            <option value="180">3</option>
            <option value="240">4</option>
            <option value="300">5</option>
          </select>
        </div>
      </Box>
      {/* End Timer */}

      <button onClick={() => changeNav("menu")} className="special">
        Back
      </button>
    </Content>
  );
};

export default Setting;
