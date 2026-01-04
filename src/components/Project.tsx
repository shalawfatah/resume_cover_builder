import type { ProjectProps } from "../types";

export default function Project({
  title,
  description,
  live_link,
  github_link,
}: ProjectProps) {
  return (
    <div className="my-4">
      <h6 className="font-bold text-md">{title}</h6>
      <p>{description}</p>
      <div className="flex flex-row items-center gap-x-1">
        <p className="font-bold">Live Link:</p>
        <a
          href={live_link}
          target="_blank"
          className="text-indigo-700 underline cursor-pointer"
        >
          {live_link}
        </a>
      </div>
      <div className="flex flex-row items-center gap-x-1">
        <p className="font-bold">Github Link:</p>
        <a
          href={github_link}
          target="_blank"
          className="text-indigo-700 underline cursor-pointer"
        >
          {github_link}
        </a>
      </div>
    </div>
  );
}
