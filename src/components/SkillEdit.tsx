import { useState, useEffect, useRef } from "react";
import type { SkillInputProps } from "../types";

export default function SkillEdit({
  skills,
  onTechStackChange,
}: SkillInputProps) {
  const [localSkills, setLocalSkills] = useState(skills.join(", "));
  const onTechStackChangeRef = useRef(onTechStackChange);

  // Keep ref updated
  useEffect(() => {
    onTechStackChangeRef.current = onTechStackChange;
  }, [onTechStackChange]);

  // Debounced update
  useEffect(() => {
    const timer = setTimeout(() => {
      const skillsArray = localSkills
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      onTechStackChangeRef.current(skillsArray);
    }, 500);

    return () => clearTimeout(timer);
  }, [localSkills]); // REMOVED onTechStackChange from deps

  // REMOVED the sync useEffect that was causing comma to disappear

  return (
    <>
      <p className="text-xs text-slate-500 my-1">Skills are comma separated</p>
      <textarea
        rows={4}
        value={localSkills}
        placeholder="React, TypeScript, Tailwind, Supabase"
        onChange={(e) => setLocalSkills(e.target.value)}
        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
      />
    </>
  );
}
