import { useState } from "react";
import ResumePreview from "./ResumePreview";
import SubHeader from "./SubHeader";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { cover_data } from "../utils/cover_data";

export default function CoverEdit() {
  const [company, setCompany] = useState(cover_data.company);
  const [content, setContent] = useState(cover_data.content);

  return (
    <ResumePreview>
      <div className="w-full min-w-[400px] space-y-6">
        <SubHeader text="Edit Cover Letter" />
        <FormInput
          label="Company Name"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <FormTextArea
          label="Cover Letter Content"
          placeholder="Write your cover letter here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
      </div>
    </ResumePreview>
  );
}
