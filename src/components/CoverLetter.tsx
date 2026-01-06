import { useAppSelector } from "../store/hooks";
import ResumePreview from "./ResumePreview";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function CoverLetter() {
  const componentRef = useRef<HTMLDivElement>(null);

  const date = new Date();
  const formatted = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const personal_data = useAppSelector((state) => state.personalData);
  const cover_data = useAppSelector((state) => state.coverData);

  const handlePrint = useReactToPrint({
    contentRef: componentRef, // Changed from 'content' to 'contentRef'
    documentTitle: `${personal_data.name}_Cover_Letter_${cover_data.company}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 25mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
  });

  return (
    <>
      <ResumePreview>
        <div ref={componentRef} className="bg-white p-8 relative">
          <button
            onClick={handlePrint}
            className="absolute -top-16 -left-16 bg-green-600 font-bold hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer print:hidden"
          >
            Download as PDF
          </button>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">{personal_data.name}</h2>
            <p className="text-sm mb-1">
              {personal_data.address.full_address} |{" "}
              {personal_data.phone.source} | {personal_data.email.source}
            </p>
            <p className="text-sm">{formatted}</p>
          </div>

          <div className="mb-12">
            <p className="font-semibold mb-4">
              Dear {cover_data.company} Hiring Team,
            </p>
            <p className="text-base leading-relaxed whitespace-pre-wrap mb-8">
              {cover_data.content}
            </p>
          </div>

          <div>
            <p className="mb-1">Sincerely,</p>
            <p className="font-semibold">{personal_data.name}</p>
          </div>
        </div>
      </ResumePreview>
    </>
  );
}
