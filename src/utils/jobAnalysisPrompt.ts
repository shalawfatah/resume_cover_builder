export function buildJobAnalysisPrompt(jobPosting: string): string {
  return `
You are a professional resume and cover letter optimization assistant. Analyze the following job posting and extract key information.

Job Posting:
"""
${jobPosting}
"""

Please analyze this job posting and provide the following information in JSON format:

{
  "suggestedTitle": "A suitable job title for the resume",
  "suggestedSummary": "A professional summary (2-3 sentences) tailored to this role",
  "keySkills": ["skill1", "skill2", "skill3"],
  "companyName": "The company name from the posting",
  "coverLetterContent": "A complete, professional cover letter tailored to this job. IMPORTANT: Write this as a single paragraph with no line breaks. Use spaces between sentences instead of newlines.",
  "keyResponsibilities": ["responsibility1", "responsibility2"],
  "requiredExperience": "Years of experience or level required"
}

CRITICAL FORMATTING RULES:
- Return ONLY valid JSON
- The coverLetterContent field MUST be a single line with no newline characters
- Use \\n if you need to indicate paragraph breaks
- No additional text or explanation
- Ensure all string values are properly escaped

Return ONLY valid JSON, no additional text or explanation.
`.trim();
}
