import { useState } from "react";
import TabSwitcher from "./components/TabSwitcher";
import Resume from "./components/Resume";
import CoverLetter from "./components/CoverLetter";
import ResumeEdit from "./components/ResumeEdit";
import CoverEdit from "./components/CoverEdit";
import JobPosting from "./components/JobPosting";

function App() {
  const [activeTab, setActiveTab] = useState<"resume" | "cover-letter">(
    "resume",
  );
  const [isJobPostingOpen, setIsJobPostingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-100 py-8 px-4 relative">
      <button
        onClick={() => setIsJobPostingOpen(true)}
        className="px-6 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer duration-200 absolute top-0 left-16 bg-indigo-600 rounded-t-none text-white hover:bg-indigo-700"
      >
        Job Posting
      </button>

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

      {/* Job Posting Modal */}
      <JobPosting
        isOpen={isJobPostingOpen}
        onClose={() => setIsJobPostingOpen(false)}
      />
    </div>
  );
}

export default App;
