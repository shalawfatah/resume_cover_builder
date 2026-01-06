import ExperienceEdit from "./ExperienceEdit";
import SkillEdit from "./SkillEdit";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import ResumePreview from "./ResumePreview";
import SubHeader from "./SubHeader";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateJob } from "../store/jobsDataSlice";
import { setSkills } from "../store/skillsDataSlice";

export default function ResumeEdit() {
  const dispatch = useAppDispatch();
  const jobs_data = useAppSelector((state) => state.jobsData);
  const skills = useAppSelector((state) => state.skillsData); // READ FROM REDUX

  return (
    <ResumePreview>
      <div className="w-full min-w-[400px]">
        <SubHeader text="Edit Resume" />
        <SubHeader text="Summary" />
        <FormInput label="Title" placeholder="Senior Frontend Developer" />
        <FormTextArea label="Professional Summary" />
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
