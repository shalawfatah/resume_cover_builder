import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import ResumePreview from "./ResumePreview";
import SubHeader from "./SubHeader";

export default function ResumeEdit() {
  return (
    <ResumePreview>
      <SubHeader text="Edit Resume" />
      <FormInput label="Title" placeholder="Senior Frontend Developer" />
      <FormTextArea label="Professional Summary" />
    </ResumePreview>
  );
}
