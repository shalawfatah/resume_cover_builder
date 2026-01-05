import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "./personalDataSlice";
import jobsDataReducer from "./jobsDataSlice";

export const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    jobsData: jobsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
