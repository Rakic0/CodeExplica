import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import codeReducer from '../features/code/codeSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    code: codeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
