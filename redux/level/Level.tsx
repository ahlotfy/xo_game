import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  difficultyLevel: "",
};
const difficultyLevelReducer = createSlice({
  name: "difficulty_level",
  initialState,
  reducers: {
    setDifficultyLevel: (state, action) => {
      state.difficultyLevel = action.payload;
    },
  },
});
export default difficultyLevelReducer.reducer;
export const { setDifficultyLevel } = difficultyLevelReducer.actions;
