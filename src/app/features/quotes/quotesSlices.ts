import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.push(action.payload);
    },
    resetQuote: (state) => {
      state.length = 0;
    },
  },
});

export const { addQuote, resetQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
