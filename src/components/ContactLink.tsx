import type { ContactProps } from "../types";

export default function ContactLink({ text, source, link }: ContactProps) {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <p className="font-bold text-xs">{text}</p>
      <a href={link} target="_blank" className="text-xs text-indigo-800 underline">
        {source}
      </a>
    </div>
  );
}
