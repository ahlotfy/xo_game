import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isMusic: true,
  isSoundEffect: true,
};
const soundReducer = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    setIsMusic: (state, action) => {
      state.isMusic = action.payload;
    },
    setIsSoundEffect: (state, action) => {
      state.isSoundEffect = action.payload;
    },
  },
});
export default soundReducer.reducer;
export const { setIsMusic, setIsSoundEffect } = soundReducer.actions;
