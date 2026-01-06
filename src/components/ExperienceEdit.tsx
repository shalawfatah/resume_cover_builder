import { useState, useEffect, useRef } from "react";
import type { JobInputProps } from "../types";

export default function ExperienceEdit({
  company_name,
  position,
  tasks,
  techstack,
  onTasksChange,
  onTechStackChange,
}: JobInputProps) {
  const [localTasks, setLocalTasks] = useState(tasks.join("\n"));
  const [localTechstack, setLocalTechstack] = useState(techstack.join(", "));

  const onTasksChangeRef = useRef(onTasksChange);
  const onTechStackChangeRef = useRef(onTechStackChange);

  // Keep refs updated
  useEffect(() => {
    onTasksChangeRef.current = onTasksChange;
  }, [onTasksChange]);

  useEffect(() => {
    onTechStackChangeRef.current = onTechStackChange;
  }, [onTechStackChange]);

  // Debounced updates
  useEffect(() => {
    const timer = setTimeout(() => {
      const tasksArray = localTasks
        .split("\n")
        .map((t) => t.trim())
        .filter(Boolean);
      onTasksChangeRef.current(tasksArray);
    }, 500);

    return () => clearTimeout(timer);
  }, [localTasks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const techArray = localTechstack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      onTechStackChangeRef.current(techArray);
    }, 500);

    return () => clearTimeout(timer);
  }, [localTechstack]);

  // REMOVED the sync useEffects completely - they were causing the issue!

  return (
    <div className="space-y-3 bg-gray-100 p-4 my-4">
      <h6 className="text-sm font-semibold text-slate-800">
        {company_name} – {position}
      </h6>

      <p className="text-xs text-slate-500">One responsibility per line</p>
      <textarea
        rows={10}
        value={localTasks}
        placeholder="Built reusable React components
Integrated REST APIs
Improved performance by 30%"
        onChange={(e) => setLocalTasks(e.target.value)}
        className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          resize-y"
      />

      <p className="text-xs text-slate-500">Tech stack (comma separated)</p>
      <textarea
        rows={2}
        value={localTechstack}
        placeholder="React, TypeScript, Tailwind, Supabase"
        onChange={(e) => setLocalTechstack(e.target.value)}
        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          resize-none"
      />
    </div>
  );
}
