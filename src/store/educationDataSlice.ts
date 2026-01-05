import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { EducationProps } from "../types";

const initialState: EducationProps[] = [
  {
    id: 1,
    title: "Masters in Business Administration",
    specialty: "Project Management",
    school: "AUIS",
    duration: "2015 - 2017",
  },
  {
    id: 2,
    title: "Bachelor in Arts",
    specialty: "International Studies",
    school: "AUIS",
    duration: "2009 - 2013",
  },
];

const educationDataSlice = createSlice({
  name: "educationData",
  initialState,
  reducers: {
    // Add a new education entry
    addEducation: (state, action: PayloadAction<EducationProps>) => {
      state.push(action.payload);
    },

    // Update an entire education entry by id
    updateEducation: (state, action: PayloadAction<EducationProps>) => {
      const index = state.findIndex((edu) => edu.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    // Delete an education entry by id
    deleteEducation: (state, action: PayloadAction<number>) => {
      return state.filter((edu) => edu.id !== action.payload);
    },

    // Update specific field of an education entry - fully typed
    updateEducationField: <K extends keyof EducationProps>(
      state: EducationProps[],
      action: PayloadAction<{ id: number; field: K; value: EducationProps[K] }>,
    ) => {
      const education = state.find((edu) => edu.id === action.payload.id);
      if (education) {
        education[action.payload.field] = action.payload.value;
      }
    },
  },
});

export const {
  addEducation,
  updateEducation,
  deleteEducation,
  updateEducationField,
} = educationDataSlice.actions;

export default educationDataSlice.reducer;
