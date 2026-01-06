import ExperienceEdit from "./ExperienceEdit";
import SkillEdit from "./SkillEdit";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import ResumePreview from "./ResumePreview";
import SubHeader from "./SubHeader";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateJob } from "../store/jobsDataSlice";
import { setSkills } from "../store/skillsDataSlice";
import { updateExpertise, updateSummary } from "../store/personalDataSlice"; // ADD THIS

export default function ResumeEdit() {
  const dispatch = useAppDispatch();
  const jobs_data = useAppSelector((state) => state.jobsData);
  const personal_data = useAppSelector((state) => state.personalData);
  const skills = useAppSelector((state) => state.skillsData);

  return (
    <ResumePreview>
      <div>
        <SubHeader text="Summary" />

        <FormInput
          label="Title"
          placeholder="Senior Frontend Developer"
          value={personal_data.expertise}
          onChange={(e) => dispatch(updateExpertise(e.target.value))}
        />

        <FormTextArea
          label="Professional Summary"
          value={personal_data.summary}
          onChange={(e) => dispatch(updateSummary(e.target.value))}
          rows={7}
        />

        <SubHeader text="Experience" />
        {jobs_data.map((item) => (
          <div key={item.id}>
            <ExperienceEdit
              company_name={item.name}
              position={item.position}
              tasks={item.tasks}
              techstack={item.techstack}
              onTasksChange={(newTasks) => {
                dispatch(
                  updateJob({
                    ...item,
                    tasks: newTasks,
                  }),
                );
              }}
              onTechStackChange={(newTech) => {
                dispatch(
                  updateJob({
                    ...item,
                    techstack: newTech,
                  }),
                );
              }}
            />
          </div>
        ))}

        <SubHeader text="Skills" />
        <div className="mb-4">
          <SkillEdit
            skills={skills}
            onTechStackChange={(newSkills) => {
              dispatch(setSkills(newSkills));
            }}
          />
        </div>
      </div>
    </ResumePreview>
  );
}
