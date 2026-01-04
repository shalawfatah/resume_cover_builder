import "./App.css";
import Btn from "./components/Btn";
import ResumePreview from "./components/ResumePreview";
import SubHeader from "./components/SubHeader";
import Title from "./components/Title";

function App() {
  return (
    <>
      <ResumePreview>
        <Btn text="Export to PDF" />
        <Title text="Shalaw Karim" />
        <SubHeader text="SUMMARY" />
      </ResumePreview>
    </>
  );
}

export default App;
