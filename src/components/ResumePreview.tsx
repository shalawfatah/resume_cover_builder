import type { ReactNode } from "react";

export default function ResumePreview({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-100 p-4 md:p-12">
      <div
        className="
        mx-auto
        bg-white
        w-full              
        max-w-[800px]      
        h-auto            
        min-h-[1000px]   
        shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
        border border-gray-200 
        p-12 md:p-20        
      "
      >
        {children}
      </div>
    </div>
  );
}
