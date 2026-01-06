import ResumePreview from "./ResumePreview";
import SubHeader from "./SubHeader";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateCompany, updateContent } from "../store/coverDataSlice";

export default function CoverEdit() {
  const dispatch = useAppDispatch();
  const cover_data = useAppSelector((state) => state.coverData);

  return (
    <ResumePreview>
      <div className="w-full min-w-[400px] space-y-6">
        <SubHeader text="Edit Cover Letter" />
        <FormInput
          label="Company Name"
          placeholder="Company Name"
          value={cover_data.company}
          onChange={(e) => dispatch(updateCompany(e.target.value))}
        />
        <FormTextArea
          label="Cover Letter Content"
          placeholder="Write your cover letter here..."
          value={cover_data.content}
          onChange={(e) => dispatch(updateContent(e.target.value))}
          rows={10}
        />
      </div>
    </ResumePreview>
  );
}
