// src/store/coverDataSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CoverData } from "../types";

const initialState: CoverData = {
  company: "MobSquad",
  content:
    "I am excited to apply for the Senior Front-End Engineer role at MobSquad. With over six years of experience building scalable, user-centric web applications using React, TypeScript, and modern JavaScript frameworks, I excel at delivering high-quality software across the full development lifecycle. I am passionate about turning complex requirements into intuitive, maintainable solutions and collaborating closely with cross-functional teams to create impactful products. MobSquad's reputation for innovation, inclusivity, and supporting Canada's tech ecosystem aligns perfectly with my values and professional goals. I would be thrilled to contribute my skills to your dynamic team and help drive meaningful results for your clients.Thank you for your consideration. I look forward to the opportunity to discuss how I can contribute to MobSquad's continued success.",
};

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
