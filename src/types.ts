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
