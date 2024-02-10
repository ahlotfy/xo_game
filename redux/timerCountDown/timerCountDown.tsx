import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isTimer: true,
  countDown: 120,
};
const timerCountDownReducer = createSlice({
  name: "timer_countdown",
  initialState,
  reducers: {
    setIsTimer: (state, action) => {
      state.isTimer = action.payload;
    },
    setCountDown: (state, action) => {
      state.countDown = action.payload;
    },
  },
});
export default timerCountDownReducer.reducer;
export const { setIsTimer, setCountDown } = timerCountDownReducer.actions;
