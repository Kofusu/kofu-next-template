import { counterSlice } from '@/app/_stores';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
