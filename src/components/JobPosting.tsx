import { useState } from "react";
import { buildJobAnalysisPrompt } from "../utils/jobAnalysisPrompt";
import type { JobAnalysis, JobPostingProps } from "../types";
import { geminiService } from "../services/gemniService";

export default function JobPosting({
  isOpen,
  onClose,
  onAnalysisComplete,
}: JobPostingProps) {
  const [jobText, setJobText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleParse = async () => {
    if (!jobText.trim()) return;
    setIsAnalyzing(true);
    setError(null);

    let response = "";

    try {
      // Test connection first
      const isConnected = await geminiService.testConnection();
      if (!isConnected) {
        throw new Error("Cannot connect to Gemini.");
      }

      // Generate the prompt
      const prompt = buildJobAnalysisPrompt(jobText);

      // Get response from Ollama
      response = await geminiService.generateResponse(prompt);

      // Clean the response - remove markdown code blocks
      let cleanedResponse = response.trim();

      // Remove ```json and ``` if present
      cleanedResponse = cleanedResponse.replace(/```json\s*/g, "");
      cleanedResponse = cleanedResponse.replace(/```\s*/g, "");
      cleanedResponse = cleanedResponse.trim();

      // FIX: Replace literal newlines in the JSON string with escaped newlines
      // This is a common issue when AI generates multi-paragraph text in JSON
      cleanedResponse = cleanedResponse.replace(
        /\n(?=(?:[^"]*"[^"]*")*[^"]*"[^"]*$)/g,
        "\\n",
      );

      console.log("Cleaned response:", cleanedResponse);

      // Parse JSON response
      const analysis: JobAnalysis = JSON.parse(cleanedResponse);

      // Pass analysis to parent
      onAnalysisComplete(analysis);

      // Close modal
      onClose();
      setJobText("");
    } catch (err) {
      console.error("Analysis error:", err);
      console.error("Raw response:", response);

      // Try a more aggressive cleanup as fallback
      try {
        let cleanedResponse = response.trim();
        cleanedResponse = cleanedResponse.replace(/```json\s*/g, "");
        cleanedResponse = cleanedResponse.replace(/```\s*/g, "");
        cleanedResponse = cleanedResponse.trim();

        // More aggressive: replace ALL newlines inside string values
        const parsed = JSON.parse(
          cleanedResponse.replace(
            /"coverLetterContent":\s*"([\s\S]*?)"/,
            (_, content) => {
              return `"coverLetterContent": "${content.replace(/\n/g, "\\n").replace(/\r/g, "")}"`;
            },
          ),
        );

        onAnalysisComplete(parsed);
        onClose();
        setJobText("");
      } catch (fallbackErr) {
        console.log("fallback ", fallbackErr);
        setError(
          err instanceof Error
            ? err.message
            : "Failed to analyze job posting. The AI response couldn't be parsed.",
        );
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-90"
        onClick={!isAnalyzing ? onClose : undefined}
      />
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Paste Job Posting
          </h2>
          <button
            onClick={onClose}
            disabled={isAnalyzing}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <textarea
            value={jobText}
            onChange={(e) => setJobText(e.target.value)}
            placeholder="Paste the job posting here..."
            disabled={isAnalyzing}
            className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none disabled:bg-gray-50"
          />

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 p-4 border-t">
          <button
            onClick={onClose}
            disabled={isAnalyzing}
            className="cursor-pointer px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleParse}
            disabled={!jobText.trim() || isAnalyzing}
            className="cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Analyzing...
              </>
            ) : (
              "Analyze"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
