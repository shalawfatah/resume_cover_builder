import type { SkillInputProps } from "../types";

export default function SkillEdit({
  skills,
  onTechStackChange,
}: SkillInputProps) {
  return (
    <>
      <p className="text-xs text-slate-500 my-1">Skills are comma separated</p>
      <textarea
        rows={2}
        value={skills.join(", ")}
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
    </>
  );
}
