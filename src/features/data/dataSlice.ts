import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GithubFile } from "../../utils/types";

export interface DataState {
  type: "repo" | "code" | null;
  content: GithubFile[] | string | null;
  repoData?: {
    owner: string | null;
    repo: string | null;
  };
}

const initialState: DataState = {
  type: null,
  content: null,
  repoData: {
    owner: null,
    repo: null,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataState>) => {
      state.type = action.payload.type;
      state.content = action.payload.content;
      state.repoData = action.payload.repoData;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
