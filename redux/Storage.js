import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./gameState/gameState";
import timerCountDownReducer from "./timerCountDown/timerCountDown";
import navReducer from "./nav/Nav";
import soundReducer from "./sound/Sounds";
import difficultyLevelReducer from "./level/Level";
import playWithReducer from "./playWith/PlayWith";
import startWithSymbolReducer from "./startWithSymbol/StartWithSymbol";
const storageRedux = configureStore({
  reducer: {
    gameStateReducer: gameStateReducer,
    timerCountDownReducer: timerCountDownReducer,
    navReducer: navReducer,
    soundReducer: soundReducer,
    difficultyLevelReducer: difficultyLevelReducer,
    playWithReducer: playWithReducer,
    startWithSymbolReducer: startWithSymbolReducer,
  },
});
export default storageRedux;
