import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/dataSlice";
import codeReducer from "../features/code/codeSlice";
import explainReducer from "../features/explained/explainedSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    code: codeReducer,
    explain: explainReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
