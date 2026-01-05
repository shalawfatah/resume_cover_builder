import { useState } from "react";
import { jobs_data } from "../utils/jobs_data";
import ExperienceEdit from "./ExperienceEdit";
import SkillEdit from "./SkillEdit";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import ResumePreview from "./ResumePreview";
import SubHeader from "./SubHeader";

export default function ResumeEdit() {
  const [jobs, setJobs] = useState(jobs_data);
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <ResumePreview>
      <div className="w-full min-w-[400px]">
        <SubHeader text="Edit Resume" />
        <SubHeader text="Summary" />
        <FormInput label="Title" placeholder="Senior Frontend Developer" />
        <FormTextArea label="Professional Summary" />

        <SubHeader text="Experience" />
        {jobs.map((item) => (
          <div key={item.id}>
            <ExperienceEdit
              company_name={item.name}
              position={item.position}
              tasks={item.tasks}
              techstack={item.techstack}
              onTasksChange={(newTasks) => {
                setJobs((prev) =>
                  prev.map((job) =>
                    job.id === item.id ? { ...job, tasks: newTasks } : job,
                  ),
                );
              }}
              onTechStackChange={(newTech) => {
                setJobs((prev) =>
                  prev.map((job) =>
                    job.id === item.id ? { ...job, techstack: newTech } : job,
                  ),
                );
              }}
            />
          </div>
        ))}

        <SubHeader text="Skills" />
        <div className="mb-4">
          <SkillEdit
            skills={skills}
            onTechStackChange={(newSkills) => setSkills(newSkills)}
          />
        </div>
      </div>
    </ResumePreview>
  );
}
