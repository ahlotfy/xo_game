import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  startWithSymbol: "",
};
const symbols = ["X", "O"];
const startWithSymbolReducer = createSlice({
  name: "start_with_symbol",
  initialState,
  reducers: {
    setStartWithSymbol: (state, action) => {
      if (action.payload === "random") {
        state.startWithSymbol =
          symbols[Math.floor(Math.random() * symbols.length)];
      } else {
        state.startWithSymbol = action.payload;
      }
    },
  },
});
export default startWithSymbolReducer.reducer;
export const { setStartWithSymbol } = startWithSymbolReducer.actions;
