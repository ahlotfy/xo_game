import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  playWith: "",
};
const playWithReducer = createSlice({
  name: "PlayWith",
  initialState,
  reducers: {
    setPlayWithReducer: (state, action) => {
      state.playWith = action.payload;
    },
  },
});
export default playWithReducer.reducer;
export const { setPlayWithReducer } = playWithReducer.actions;
