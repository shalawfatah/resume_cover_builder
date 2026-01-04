import type { ContactProps } from "../types";

export default function ContactSimple({ text, source }: ContactProps) {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <p className="font-bold text-xs">{text}</p>
      <p className="text-xs">{source}</p>
    </div>
  );
}
