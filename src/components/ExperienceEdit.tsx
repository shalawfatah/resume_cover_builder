import type { JobInputProps } from "../types";

export default function ExperienceEdit({
  company_name,
  position,
  tasks,
  techstack,
  onTasksChange,
  onTechStackChange,
}: JobInputProps) {
  return (
    <div className="space-y-3 bg-gray-100 p-4 my-4">
      <h6 className="text-sm font-semibold text-slate-800">
        {company_name} – {position}
      </h6>
      <p className="text-xs text-slate-500">One responsibility per line</p>
      <textarea
        rows={5}
        value={tasks.join("\n")}
        placeholder="Built reusable React components
Integrated REST APIs
Improved performance by 30%"
        onChange={(e) =>
          onTasksChange(
            e.target.value
              .split("\n")
              .map((t) => t.trim())
              .filter(Boolean),
          )
        }
        className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          resize-y"
      />
      <p className="text-xs text-slate-500">Tech stack (comma separated)</p>
      <textarea
        rows={2}
        value={techstack.join(", ")}
        placeholder="React, TypeScript, Tailwind, Supabase"
        onChange={(e) =>
          onTechStackChange(
            e.target.value
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean),
          )
        }
        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          resize-none"
      />
    </div>
  );
}
