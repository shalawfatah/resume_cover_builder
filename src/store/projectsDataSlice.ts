import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProjectProps } from "../types";

const initialState: ProjectProps[] = [
  {
    title: "AI-Powered Developer Portfolio",
    description:
      "A modern developer portfolio built with Next.js, featuring an AI-integrated chatbot that can answer questions about my skills, projects, and background. Employers are welcome to discover more about me.",
    live_link: "https://shalawdev.netlify.app",
    github_link: "https://github.com/shalawfatah/ai_integrated_profile",
  },
  {
    title: "Invoice Generator Mobile App",
    description:
      "A cross-platform mobile app for creating invoices, estimates, and PTOs on the go, with automatic revenue and expense tracking, created with React Native and PostgreSQL.",
    live_link: "https://apps.apple.com/us/app/invoice-generator/id6463258259",
    github_link: "https://github.com/shalawfatah/invoice-generator",
  },
  {
    title: "Movie Database",
    description:
      "A React/Next.js project with Tailwind CSS and reusable components. Features integration with MovieDB REST API using nested endpoints, along with search and filter functionality.",
    live_link: "https://imdb-movies-api.netlify.app",
    github_link: "https://github.com/shalawfatah/tmdb-api",
  },
  {
    title: "Teaching Platform Mobile App",
    description:
      "A React Native-based teaching platform where teachers can open accounts and publish videos for registered students. Students can watch videos and live-streams, while teachers can post videos and courses.",
    live_link: "https://apps.apple.com/us/app/rava/id6471388519",
    github_link: "https://github.com/shalawfatah/rava_crm",
  },
];

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
      action: PayloadAction<{ index: number; field: K; value: ProjectProps[K] }>,
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
