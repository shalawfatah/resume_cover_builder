import type { TabSwitcherProps } from "../types";

export default function TabSwitcher({
  activeTab,
  setActiveTab,
}: TabSwitcherProps) {
  const tabs = [
    { id: "resume", label: "Resume" },
    { id: "cover-letter", label: "Cover Letter" },
  ] as const;

  return (
    <div className="flex justify-center">
      <div className="bg-white p-1.5 rounded-xl rounded-b-none shadow-sm border border-slate-200 inline-flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer duration-200
              ${activeTab === tab.id
                ? "bg-green-600 text-white shadow-md translate-y-[-1px]"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
