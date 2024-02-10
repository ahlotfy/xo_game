import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  gameStart: true,
  gamePause: false,
};
const gameStateReducer = createSlice({
  name: "game_state",
  initialState,
  reducers: {
    setGameStart: (state, action) => {
      state.gameStart = action.payload;
    },
    setGamePause: (state, action) => {
      state.gamePause = action.payload;
    },
  },
});
export default gameStateReducer.reducer;
export const { setGameStart, setGamePause } = gameStateReducer.actions;
