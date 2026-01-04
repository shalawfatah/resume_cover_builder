import type { EducationProps } from "../types";

export default function Education({
  title,
  specialty,
  school,
  duration,
}: EducationProps) {
  return (
    <div className="my-2">
      <div className="flex flex-row gap-x-2">
        <h6 className="font-bold">{title}</h6>
        <p>-</p>
        <p className="font-bold">{specialty}</p>
      </div>
      <div className="flex flex-row gap-x-[2px] italic">
        <p>{school}</p>
        <p>,</p>
        <p>{duration}</p>
      </div>
    </div>
  );
}
