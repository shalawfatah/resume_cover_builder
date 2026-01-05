// src/store/jobsDataSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { JobProps } from "../types";

const initialState: JobProps[] = [
  {
    id: 1,
    name: "Galactic Digital",
    position: "Web Developer",
    duration: "2021 - Present",
    tasks: [
      "Led and delivered multiple full-stack web projects for high-traffic clients, contributing directly to revenue growth",
      "Built and maintained modern React and Next.js applications with a strong focus on performance, scalability, and maintainability",
      "Mentored 3 junior developers and conducted code reviews",
    ],
    techstack: ["React", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    name: "Mercury Mines",
    position: "Web Developer",
    duration: "2016 - 2021",
    tasks: [
      "Led and delivered multiple full-stack web projects for high-traffic clients, contributing directly to revenue growth",
      "Built and maintained modern React and Next.js applications with a strong focus on performance, scalability, and maintainability",
      "Mentored 3 junior developers and conducted code reviews",
    ],
    techstack: ["Golang", "TypeScript", "Vue", "Angular", "Python", "Django"],
  },
];

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState,
  reducers: {
    // Add a new job
    addJob: (state, action: PayloadAction<JobProps>) => {
      state.push(action.payload);
    },

    // Update an entire job by id
    updateJob: (state, action: PayloadAction<JobProps>) => {
      const index = state.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    // Delete a job by id
    deleteJob: (state, action: PayloadAction<number>) => {
      return state.filter((job) => job.id !== action.payload);
    },

    // Update specific fields of a job - FIXED TYPE
    updateJobField: <K extends keyof JobProps>(
      state: JobProps[],
      action: PayloadAction<{ id: number; field: K; value: JobProps[K] }>,
    ) => {
      const job = state.find((job) => job.id === action.payload.id);
      if (job) {
        job[action.payload.field] = action.payload.value;
      }
    },

    // Add a task to a specific job
    addTask: (
      state,
      action: PayloadAction<{ jobId: number; task: string }>,
    ) => {
      const job = state.find((job) => job.id === action.payload.jobId);
      if (job) {
        job.tasks.push(action.payload.task);
      }
    },

    // Remove a task from a specific job
    removeTask: (
      state,
      action: PayloadAction<{ jobId: number; taskIndex: number }>,
    ) => {
      const job = state.find((job) => job.id === action.payload.jobId);
      if (job) {
        job.tasks.splice(action.payload.taskIndex, 1);
      }
    },
  },
});

export const {
  addJob,
  updateJob,
  deleteJob,
  updateJobField,
  addTask,
  removeTask,
} = jobsDataSlice.actions;

export default jobsDataSlice.reducer;
