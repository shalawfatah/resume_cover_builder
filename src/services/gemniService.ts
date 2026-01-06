export class GeminiService {
  private apiUrl: string;

  constructor(
    apiUrl: string = "https://shalawdev.netlify.app/api/analyze-job",
  ) {
    this.apiUrl = apiUrl;
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      // Simple health check - try to analyze empty string
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: "test connection" }),
      });
      return response.ok;
    } catch (error) {
      console.error("Connection test failed:", error);
      return false;
    }
  }
}

export const geminiService = new GeminiService();
