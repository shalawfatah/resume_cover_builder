import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { personal_data } from "../utils/personal_data";

const initialState = personal_data;

const personalDataSlice = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    updatePersonalData: (
      state,
      action: PayloadAction<Partial<typeof initialState>>,
    ) => {
      return { ...state, ...action.payload };
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateExpertise: (state, action: PayloadAction<string>) => {
      state.expertise = action.payload;
    },
    updateSummary: (state, action: PayloadAction<string>) => {
      state.summary = action.payload;
    },
    // Add more specific updaters as needed
  },
});

export const {
  updatePersonalData,
  updateName,
  updateExpertise,
  updateSummary,
} = personalDataSlice.actions;
export default personalDataSlice.reducer;
