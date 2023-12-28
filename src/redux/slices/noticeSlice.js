import { createSlice } from "@reduxjs/toolkit";

const initialState = { onboarded: false };

const messagesSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    setOnboarded(state, action) {
      state.onboarded = action.payload;
    },
  },
});

export const { setOnboarded } = messagesSlice.actions;
export default messagesSlice.reducer;
