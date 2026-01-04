import "./App.css";
import Btn from "./components/Btn";
import ContactLink from "./components/ContactLink";
import ContactSimple from "./components/ContactSimple";
import Divider from "./components/Divider";
import Job from "./components/Job";
import Project from "./components/Project";
import ResumePreview from "./components/ResumePreview";
import Skill from "./components/Skill";
import SubHeader from "./components/SubHeader";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import { projects } from "./utils/projects";
import { skills } from "./utils/skills";

function App() {
  return (
    <>
      <ResumePreview>
        <Btn text="Export to PDF" />
        <Title text="Shalaw Karim" />
        <SubTitle text="Senior Frontend Developer" />
        <Divider />
        <SubHeader text="Summary" />
        <p>
          Experienced React JS Developer skilled at designing and implementing
          responsive, high-performance user interfaces. Proven track record in
          leading and mentoring development teams, collaborating with
          cross-functional stakeholders, and translating business requirements
          into technical solutions.
        </p>
        <div className="flex flex-row justify-between my-4">
          <div>
            <ContactLink
              text="Website:"
              source="shalawdev.netlify.app"
              link="https://shalawdev.netlify.app"
            />
            <ContactSimple text="Email:" source="shalaw.fatah@gmail.com" />
            <ContactLink
              text="Github:"
              source="github.com/shalawfatah"
              link="https://github.com/shalawfatah"
            />
          </div>
          <div>
            <ContactSimple text="Phone:" source="+1 (604) 900 7285" />
            <ContactSimple text="Address:" source="New Westminster, BC" />
            <ContactLink
              text="LinkedIn:"
              source="linkedin.com/in/shalawfatah"
              link="https://linkedin.com/in/shalawfatah"
            />
          </div>
        </div>
        <SubHeader text="Experience" />
        <Job
          name="Galactic Digital"
          position="Web Developer"
          duration="2021 - Present"
          tasks={[
            "Led and delivered multiple full-stack web projects for high-traffic clients, contributing directly to revenue growth",
            "Built and maintained modern React and Next.js applications with a strong focus on performance, scalability, and maintainability",
            "Mentored 3 junior developers and conducted code reviews",
          ]}
          techstack={["react", "js", "typescript"]}
        />
        <Job
          name="Mercury Mines"
          position="Web Developer"
          duration="2016 - 2021"
          tasks={[
            "Led and delivered multiple full-stack web projects for high-traffic clients, contributing directly to revenue growth",
            "Built and maintained modern React and Next.js applications with a strong focus on performance, scalability, and maintainability",
            "Mentored 3 junior developers and conducted code reviews",
          ]}
          techstack={[
            "Golang",
            "Typescript",
            "Vue",
            "Angular",
            "Python",
            "Django",
          ]}
        />
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
      </ResumePreview>
    </>
  );
}

export default App;
