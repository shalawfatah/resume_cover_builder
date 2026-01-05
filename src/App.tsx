import { useState } from "react";
import TabSwitcher from "./components/TabSwitcher";
import Resume from "./components/Resume";
import CoverLetter from "./components/CoverLetter";
import ResumeEdit from "./components/ResumeEdit";
import CoverEdit from "./components/CoverEdit";

function App() {
  const [activeTab, setActiveTab] = useState<"resume" | "cover-letter">(
    "resume",
  );

  return (
    <div className="min-h-screen bg-zinc-100 py-8 px-4">
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex justify-center">
        {activeTab === "resume" ? (
          <>
            <ResumeEdit />
            <Resume />
          </>
        ) : (
          <>
            <CoverEdit />
            <CoverLetter />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
