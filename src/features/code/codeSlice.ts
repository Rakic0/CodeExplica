import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CodeState {
  content: string;
}

const initialState: CodeState = {
  content: '// Click on files on your left side',
};

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
});

export const { setCode } = codeSlice.actions;
export default codeSlice.reducer;
