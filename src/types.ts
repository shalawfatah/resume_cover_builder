export interface ContactProps {
  text: string;
  source: string;
  link?: string;
}

export interface JobProps {
  name: string;
  position: string;
  duration: string;
  tasks: string[];
  techstack: string[];
}

export interface ProjectProps {
  title: string;
  description: string;
  live_link: string;
  github_link: string;
}

export interface EducationProps {
  title: string;
  specialty: string;
  duration: string;
  school: string;
}

export interface TabSwitcherProps {
  activeTab: "resume" | "cover-letter";
  setActiveTab: React.Dispatch<React.SetStateAction<"resume" | "cover-letter">>;
}
