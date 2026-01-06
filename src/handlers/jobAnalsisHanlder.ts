import type { AppDispatch } from "../store/store";
import { updateExpertise, updateSummary } from "../store/personalDataSlice";
import { setSkills } from "../store/skillsDataSlice";
import { updateCompany, updateContent } from "../store/coverDataSlice";
import { updateJob } from "../store/jobsDataSlice";
import type { RootState } from "../store/store";
import type { JobAnalysis } from "../types";

export const handleJobAnalysis = (
  analysis: JobAnalysis,
  dispatch: AppDispatch,
  currentState: RootState,
  setActiveMode: (mode: "view" | "edit" | "both") => void,
) => {
  console.log("Job analysis completed:", analysis);

  const { jobsData, skillsData } = currentState;

  // 1. Update Resume Title (expertise)
  dispatch(updateExpertise(analysis.suggestedTitle));

  // 2. Update Resume Summary
  dispatch(updateSummary(analysis.suggestedSummary));

  // 3. Update Skills - merge AI suggestions with existing skills (no duplicates)
  const mergedSkills = Array.from(
    new Set([...skillsData, ...analysis.keySkills]),
  );
  dispatch(setSkills(mergedSkills));

  // 4. Update Cover Letter Company Name
  dispatch(updateCompany(analysis.companyName));

  // 5. Update Cover Letter with AI-generated content
  dispatch(updateContent(analysis.coverLetterContent));

  // 6. Update job techstacks - add relevant skills to most recent job
  if (jobsData.length > 0) {
    const mostRecentJob = jobsData[0];

    // Filter out soft skills, keep technical skills
    const technicalSkills = analysis.keySkills.filter(
      (skill) =>
        ![
          "Object Oriented Programming",
          "Agile",
          "relational database systems",
        ].includes(skill),
    );

    // Merge with existing techstack (no duplicates, max 8 total)
    const updatedTechStack = Array.from(
      new Set([...mostRecentJob.techstack, ...technicalSkills]),
    ).slice(0, 8);

    dispatch(
      updateJob({
        ...mostRecentJob,
        techstack: updatedTechStack,
      }),
    );
  }

  // 7. Switch to "both" mode to see changes
  setActiveMode("both");

  // 8. Show success notification
  alert(
    `✅ Resume and Cover Letter updated for ${analysis.companyName}!\n\n` +
    `Updated:\n` +
    `- Title: ${analysis.suggestedTitle}\n` +
    `- Professional Summary\n` +
    `- Skills (${analysis.keySkills.length} added)\n` +
    `- Cover Letter (AI-generated)\n` +
    `- Tech Stack\n\n` +
    `Review and adjust as needed.`,
  );
};
