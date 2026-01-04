import "./App.css";
import Btn from "./components/Btn";
import ContactSection from "./components/ContactSection";
import Divider from "./components/Divider";
import Education from "./components/Education";
import Job from "./components/Job";
import Project from "./components/Project";
import ResumePreview from "./components/ResumePreview";
import Skill from "./components/Skill";
import SubHeader from "./components/SubHeader";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import { education_data } from "./utils/education";
import { jobs_data } from "./utils/jobs_data";
import { personal_data } from "./utils/personal_data";
import { projects } from "./utils/projects";
import { skills } from "./utils/skills";

function App() {
  return (
    <>
      <ResumePreview>
        <Btn text="Export to PDF" />
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
    </>
  );
}

export default App;
