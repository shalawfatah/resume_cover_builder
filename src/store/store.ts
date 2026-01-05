import { configureStore } from "@reduxjs/toolkit";
import personalDataReducer from "./personalDataSlice";
import jobsDataReducer from "./jobsDataSlice";
import coverDataReducer from "./coverDataSlice";
import educationDataReducer from "./educationDataSlice";
import projectDataReducer from "./projectsDataSlice";

export const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
    jobsData: jobsDataReducer,
    coverData: coverDataReducer,
    educationData: educationDataReducer,
    projectData: projectDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
