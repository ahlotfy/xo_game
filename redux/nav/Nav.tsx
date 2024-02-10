import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nav: "menu",
};
const navReducer = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNav: (state, action) => {
      state.nav = action.payload;
    },
  },
});
export default navReducer.reducer;
export const { setNav } = navReducer.actions;
