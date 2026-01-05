import { useAppSelector } from "../store/hooks";
import ContactSection from "./ContactSection";
import Divider from "./Divider";
import Education from "./Education";
import Job from "./Job";
import Project from "./Project";
import ResumePreview from "./ResumePreview";
import Skill from "./Skill";
import SubHeader from "./SubHeader";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function Resume() {
  const personal_data = useAppSelector((state) => state.personalData);
  const jobs_data = useAppSelector((state) => state.jobsData);
  const education_data = useAppSelector((state) => state.educationData);
  const projects = useAppSelector((state) => state.projectData);
  const skills = useAppSelector((state) => state.skillsData);
  return (
    <ResumePreview>
      <Title text={personal_data.name} />
      <SubTitle text={personal_data.expertise} />
      <Divider />
      <SubHeader text="Summary" />
      <p>{personal_data.summary}</p>
      <ContactSection />
      <SubHeader text="Experience" />
      {jobs_data.map((item) => {
        return (
          <div key={item.id}>
            <Job
              name={item.name}
              position={item.position}
              duration={item.duration}
              tasks={item.tasks}
              techstack={item.techstack}
            />
          </div>
        );
      })}

      <SubHeader text="Skills" />
      <div className="flex flex-row gap-2 flex-wrap my-4">
        {skills.map((item, idx) => {
          return <div key={idx}>{<Skill item={item} />}</div>;
        })}
      </div>
      <SubHeader text="Projects" />
      {projects.map((item, idx) => {
        return (
          <div key={idx}>
            <Project
              title={item.title}
              description={item.description}
              live_link={item.live_link}
              github_link={item.github_link}
            />
          </div>
        );
      })}
      <SubHeader text="Education" />
      {education_data.map((item) => {
        return (
          <div key={item.id}>
            <Education
              title={item.title}
              specialty={item.specialty}
              school={item.school}
              duration={item.duration}
            />
          </div>
        );
      })}
    </ResumePreview>
  );
}
