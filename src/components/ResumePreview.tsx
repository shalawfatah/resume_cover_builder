export default function ResumePreview({ children }) {
  return (
    <div className="bg-zinc-100 p-4 md:p-12 min-h-screen">
      <div className="
        mx-auto             /* Centers the paper */
        bg-white            /* Paper color */
        w-full              /* Mobile first width */
        max-w-[800px]       /* Standard resume width */
        h-auto              /* Flexible height */
        min-h-[1000px]      /* Ensures it looks like a page even if empty */
        shadow-[0_20px_50px_rgba(0,0,0,0.1)] /* Soft, deep shadow for realism */
        border border-gray-200 /* Sharp, crisp edge */
        p-12 md:p-20        /* Document margins */
      ">
        
        {/* Content goes here */}
        {children}

      </div>
    </div>
  );
}
