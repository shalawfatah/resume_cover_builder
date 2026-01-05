import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CoverData } from "../types";
import { cover_data } from "../utils/cover_data";

const initialState: CoverData = cover_data;

const coverDataSlice = createSlice({
  name: "coverData",
  initialState,
  reducers: {
    // Update entire cover data - FIXED: removed unused state parameter
    updateCoverData: (_state, action: PayloadAction<CoverData>) => {
      return action.payload;
    },

    // Update company name
    updateCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },

    // Update content
    updateContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },

    // Update specific field - fully typed
    updateCoverField: <K extends keyof CoverData>(
      state: CoverData,
      action: PayloadAction<{ field: K; value: CoverData[K] }>,
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const {
  updateCoverData,
  updateCompany,
  updateContent,
  updateCoverField,
} = coverDataSlice.actions;

export default coverDataSlice.reducer;
