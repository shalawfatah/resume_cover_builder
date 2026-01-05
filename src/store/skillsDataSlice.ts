import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { skills } from "../utils/skills";

const initialState: string[] = skills;

const skillsDataSlice = createSlice({
  name: "skillsData",
  initialState,
  reducers: {
    // Add a skill
    addSkill: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    
    // Remove a skill by index
    removeSkill: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
    
    // Remove a skill by name
    removeSkillByName: (state, action: PayloadAction<string>) => {
      return state.filter((skill) => skill !== action.payload);
    },
    
    // Update a skill at specific index
    updateSkill: (state, action: PayloadAction<{ index: number; skill: string }>) => {
      if (action.payload.index >= 0 && action.payload.index < state.length) {
        state[action.payload.index] = action.payload.skill;
      }
    },
    
    // Replace all skills
    setSkills: (_state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const {
  addSkill,
  removeSkill,
  removeSkillByName,
  updateSkill,
  setSkills,
} = skillsDataSlice.actions;

export default skillsDataSlice.reducer;
