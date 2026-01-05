import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  name: "Shalaw Karim",
  expertise: "Senior Frontend Developer",
  summary:
    "Experienced React JS Developer skilled at designing and implementing responsive, high-performance user interfaces. Proven track record in leading and mentoring development teams, collaborating with cross-functional stakeholders, and translating business requirements into technical solutions.",
  website: {
    label: "Website",
    source: "shalawdev.netlify.app",
    link: "https://shalawdev.netlify.app",
  },
  email: {
    label: "Email",
    source: "shalaw.fatah@gmail.com",
  },
  github: {
    label: "Github",
    source: "github.com/shalawfatah",
    link: "https://github.com/shalawfatah",
  },
  phone: { label: "Phone", source: "+1 (604) 900 7285" },
  address: {
    label: "Address",
    source: "New Westminster, BC",
    full_address: "328 Agnes St. New Westminster, BC",
  },
  linkedin: {
    label: "LinkedIn",
    source: "linkedin.com/in/shalawfatah",
    link: "https://linkedin.com/in/shalawfatah",
  },
};

const personalDataSlice = createSlice({
  name: 'personalData',
  initialState,
  reducers: {
    updatePersonalData: (state, action: PayloadAction<Partial<typeof initialState>>) => {
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

export const { updatePersonalData, updateName, updateExpertise, updateSummary } = personalDataSlice.actions;
export default personalDataSlice.reducer;
