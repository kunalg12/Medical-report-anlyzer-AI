import Groq from "groq-sdk";
import endent from "endent";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function processMedicalReport(documents: any[]) {
  const documentText = documents.map((doc: { text: any; }) => doc.text).join("\n");
  const medicalKeywords = ["blood", "test", "diagnosis", "report", "scan", "doctor"];
  
  if (!medicalKeywords.some((kw) => documentText.toLowerCase().includes(kw))) {
    return { originalDocument: documentText, analysis: "Invalid medical report." };
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: endent`You are a medical AI that provides precise, patient-friendly insights from medical reports.`,
        },
        {
          role: "user",
          content: `Analyze the following medical report and provide a clear, concise summary:\n${documentText}`,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_tokens: 512,
    });

    return {
      originalDocument: documentText,
      analysis: chatCompletion.choices[0]?.message?.content || "Unable to analyze report",
    };
  } catch (error) {
    console.error("Error processing medical report:", error);
    throw new Error("Failed to analyze medical report");
  }
}
