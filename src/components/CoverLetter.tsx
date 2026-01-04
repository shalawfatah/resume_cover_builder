import { cover_data } from "../utils/cover_data";
import { personal_data } from "../utils/personal_data";
import ResumePreview from "./ResumePreview";

export default function CoverLetter() {
  const date = new Date();

  const formatted = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <ResumePreview>
      <div>
        <h2 className="text-xl font-bold my-4">{personal_data.name}</h2>
        <p className="text-xs flex gap-x-4">
          <span>{personal_data.address.full_address} </span>|{" "}
          <span>{personal_data.phone.source} </span>|{" "}
          <span>{personal_data.email.source} </span>
        </p>
        <p className="text-xs">{formatted}</p>
      </div>
      <div className="my-24">
        <p className="font-bold">Dear {cover_data.company} Hiring Team,</p>
        <p className="my-2 leading-8">{cover_data.content}</p>
      </div>
      <div>
        <p>Sincerely,</p>
        <p>{personal_data.name}</p>
      </div>
    </ResumePreview>
  );
}
