import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExplainedState {
  content: string;
  isFetched: boolean;
}

const initialState: ExplainedState = {
  content: "Thinking...",
  isFetched: false,
};

export const explainedSlice = createSlice({
  name: "explained",
  initialState,
  reducers: {
    setExplain: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setFetched: (state, action: PayloadAction<boolean>) => {
      state.isFetched = action.payload;
    },
  },
});

export const { setExplain, setFetched } = explainedSlice.actions;
export default explainedSlice.reducer;
