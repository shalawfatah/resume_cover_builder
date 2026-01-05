import type { FormInputProps } from "../types";

export default function FormInput({
  label,
  placeholder,
  type = "text",
  ...props
}: FormInputProps) {
  return (
    <div className="w-full space-y-1.5 my-4">
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full px-4 py-2.5
          bg-white border border-slate-300 rounded-lg
          text-slate-900 text-sm
          placeholder:text-slate-400
          
          /* Interactivity & Focus States */
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          hover:border-slate-400
          
          /* Disabled State */
          disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
        "
        {...props}
      />
    </div>
  );
}
