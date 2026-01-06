type Mode = "view" | "edit" | "both";

type ModeSwitcherProps = {
  activeMode: Mode;
  setActiveMode: (mode: Mode) => void;
};

export default function ModeSwitcher({
  activeMode,
  setActiveMode,
}: ModeSwitcherProps) {
  const modes: { key: Mode; label: string }[] = [
    { key: "view", label: "View" },
    { key: "edit", label: "Edit" },
    { key: "both", label: "Both" },
  ];

  return (
    <div className="flex justify-center my-1">
      <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 inline-flex gap-1">
        {modes.map((mode) => (
          <button
            key={mode.key}
            onClick={() => setActiveMode(mode.key)}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeMode === mode.key
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
}
