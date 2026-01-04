import type { JobProps } from "../types";

export default function Job({
  name,
  position,
  duration,
  tasks,
  techstack,
}: JobProps) {
  return (
    <div className="my-2">
      <div className="flex flex-row justify-between">
        <h4 className="text-md font-bold">{name}</h4>
        <p className="text-gray-700 text-xs">{duration}</p>
      </div>
      <p className="text-gray-700 italic">{position}</p>
      <ul className="my-2">
        {tasks.map((item, idx) => {
          return (
            <li key={idx} className="text-sm">
              - {item}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row gap-x-2 items-center">
        <p className="text-gray-600 font-bold text-sm italic">TechStack: </p>
        {techstack.map((item, idx) => {
          const isLast = idx === techstack.length - 1;
          return (
            <p key={idx} className="text-xs text-gray-700 rounded-xs">
              {item}
              {!isLast && ","}
            </p>
          );
        })}
      </div>
    </div>
  );
}
