import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Upload, FileText, Send, Loader2 } from 'lucide-react';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError("");
    } else {
      setError("Please select a valid PDF file.");
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    
    // Job description is now optional
    if (jobDescription.trim()) {
      formData.append("job_description", jobDescription);
    }

    try {
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:5000/upload-resume", {
        method: "POST",
        headers: {
          Authorization: import.meta.env.VITE_AUTH_SECRET,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setAnalysis(data.summary);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
            <FileText className="w-6 h-6" />
            Resume Analyzer
          </h1>
        </div>

        <div className="p-6 space-y-4">
          {/* File Upload */}
          <div className="relative border-2 border-dashed border-blue-200 rounded-lg p-4 text-center">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="file-upload"
            />
            <label 
              htmlFor="file-upload" 
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Upload className="w-10 h-10 text-blue-500 mb-2" />
              <p className="text-gray-600">
                {file ? file.name : "Click to upload PDF resume"}
              </p>
            </label>
          </div>

          {/* Optional Job Description */}
          <textarea
            placeholder="Job description (optional)"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 transition-all duration-300 resize-y min-h-[100px]"
          />

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              loading || !file
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Generate Analysis
              </>
            )}
          </button>

          {/* Analysis Results */}
          {analysis && (
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-3">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2">
                Analysis Results
              </h2>

              <div className="space-y-2">
                <div className="bg-white shadow-sm rounded-lg p-3">
                  <h3 className="font-semibold text-blue-600 mb-1">
                    Matching Analysis
                  </h3>
                  <ReactMarkdown 
                    className="prose prose-sm text-gray-700"
                  >
                    {analysis.matching_analysis || "No matching analysis available."}
                  </ReactMarkdown>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-3">
                  <h3 className="font-semibold text-blue-600 mb-1">
                    Description
                  </h3>
                  <ReactMarkdown 
                    className="prose prose-sm text-gray-700"
                  >
                    {analysis.description || "No description available."}
                  </ReactMarkdown>
                </div>

                <div className="flex justify-between items-center bg-white shadow-sm rounded-lg p-3">
                  <h3 className="font-semibold text-blue-600">Score</h3>
                  <div className="text-2xl font-bold text-green-600">
                    {analysis.score || 0} / 100
                  </div>
                </div>

                {jobDescription.trim() && (
                <div className="flex justify-between items-center bg-white shadow-sm rounded-lg p-3 mt-4">
                  <h3 className="font-semibold text-blue-600">Skill match Score</h3>
                  <div className="text-2xl font-bold text-green-600">
                    {analysis.skill_match_score || 0} / 100
                  </div>
                </div>
              )}

                <div className="bg-white shadow-sm rounded-lg p-3">
                  <h3 className="font-semibold text-blue-600 mb-2">
                    Recommendations
                  </h3>
                  <ReactMarkdown 
                    className="prose prose-sm text-gray-700"
                    components={{
                      ul: ({node, ...props}) => (
                        <ul className="list-disc list-inside" {...props} />
                      )
                    }}
                  >
                    {analysis.recommendation || "No recommendations available."}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;