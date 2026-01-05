import type { InputHTMLAttributes } from "react";
import type { TextareaHTMLAttributes } from "react";

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

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}


export interface FormTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
}
