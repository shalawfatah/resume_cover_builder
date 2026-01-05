import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProjectProps } from "../types";
import { projects } from "../utils/projects";

const initialState: ProjectProps[] = projects;

const projectsDataSlice = createSlice({
  name: "projectsData",
  initialState,
  reducers: {
    // Add a new project
    addProject: (state, action: PayloadAction<ProjectProps>) => {
      state.push(action.payload);
    },

    // Update a project by index (since there's no id)
    updateProject: (
      state,
      action: PayloadAction<{ index: number; project: ProjectProps }>,
    ) => {
      if (action.payload.index >= 0 && action.payload.index < state.length) {
        state[action.payload.index] = action.payload.project;
      }
    },

    // Delete a project by index
    deleteProject: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },

    // Update specific field of a project by index - fully typed
    updateProjectField: <K extends keyof ProjectProps>(
      state: ProjectProps[],
      action: PayloadAction<{
        index: number;
        field: K;
        value: ProjectProps[K];
      }>,
    ) => {
      const project = state[action.payload.index];
      if (project) {
        project[action.payload.field] = action.payload.value;
      }
    },
  },
});

export const { addProject, updateProject, deleteProject, updateProjectField } =
  projectsDataSlice.actions;

export default projectsDataSlice.reducer;
