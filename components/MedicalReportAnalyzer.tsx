"use client";

import { useState } from "react";
import { Stethoscope } from "lucide-react";
// import AnalysisSteps from "./AnalysisSteps";
import UploadCard from "./UploadCard";
// import ResultsCard from "./ResultsCard";

export default function MedicalReportAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [analysisMethod, setAnalysisMethod] = useState<"url" | "upload">(
    "upload"
  );

  const handleAnalyze = async () => {
    setIsAnalyzing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
  };

  return (
    <div className="container mx-auto px-6 py-10 bg-blue-50">
      <div className="flex flex-col items-center justify-center mb-10 text-blue-700">
        <div className="flex items-center mb-6">
          <Stethoscope className="w-10 h-10 mr-3 text-orange-600" />
          <h1 className="text-4xl font-extrabold">Med-X AI</h1>
        </div>
        {/* <AnalysisSteps /> */}
      </div>

      <UploadCard
        isAnalyzing={isAnalyzing}
        onAnalyze={handleAnalyze}
        analysisMethod={analysisMethod}
        setAnalysisMethod={setAnalysisMethod}
        setIsAnalyzing={setIsAnalyzing}
      />
    </div>
  );
}
