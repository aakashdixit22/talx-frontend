import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Upload, FileText, Send, Loader2, CheckCircle2, XCircle, ArrowRight, Eye } from 'lucide-react';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPdfPreview, setShowPdfPreview] = useState(false); 
  
  const AUTH_SECRET = import.meta.env.VITE_AUTH_SECRET;
  const API_ENDPOINT_RESUME_ANALYZER = `${import.meta.env.VITE_TALX_API}/upload-resume`;
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError("");
      setShowPdfPreview(false);
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
    
    if (jobDescription.trim()) {
      formData.append("job_description", jobDescription);
    }

    try {
      setLoading(true);
      setError("");
      const response = await fetch(API_ENDPOINT_RESUME_ANALYZER, {
        method: "POST",
        headers: {
          Authorization: AUTH_SECRET,
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
    <div className="min-h-screen bg-navy relative bg-cover bg-center flex items-center justify-center p-4" >
    <div className=" flex items-center justify-center p-4 font-inter mt-20"
    >
      <div className="relative w-full max-w-6xl">
        {/* Futuristic Container */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 bg-white/10 backdrop-blur-sm border-4 border-white/20 transform  rounded-3xl  p-8 shadow-2xl">
          {/* Input Section */}
          <div className="space-y-6 relative">
            
            
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-5xl font-bold text-white">
                Resume <span className="text-specialtext">AI</span>
              </h2>
              <div className="text-gray-200 text-sm">Powered by Advanced AI</div>
            </div>

            {/* File Upload */}
            <div className="relative group">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                id="file-upload"
              />
              <label 
                htmlFor="file-upload" 
                className="block border-2 border-dashed border-gray-700 rounded-2xl p-6 text-center transition-all duration-300 hover:border-specialtext hover:bg-gray-800/50 group"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <Upload className="w-12 h-12 text-gray-200 group-hover:text-specialtext animate-pulse group-hover:animate-none transition-colors" />
                  <p className="text-white">
                    {file ? (
                      <span className="flex items-center space-x-2 text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>{file.name}</span>
                      </span>
                    ) : (
                      "Upload Resume (PDF)"
                    )}
                  </p>
                </div>
              </label>
            </div>

            {/* PDF Preview Toggle */}
            {file && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowPdfPreview(!showPdfPreview)}
                  className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  <span>{showPdfPreview ? "Hide PDF" : "Preview PDF"}</span>
                </button>
              </div>
            )}

            {/* PDF Preview */}
            {file && showPdfPreview && (
              <div className="mt-4 border-2 border-gray-700 rounded-2xl overflow-hidden">
                <object 
                  data={URL.createObjectURL(file)} 
                  type="application/pdf" 
                  width="100%" 
                  height="500px"
                  className="w-full"
                >
                  <p>Your browser doesn't support PDF preview. 
                     <a href={URL.createObjectURL(file)} download>Download the PDF</a> instead.</p>
                </object>
              </div>
            )}

            {/* Job Description */}
            <textarea
              placeholder="Paste job description (optional)"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-4 bg-gray-800 border border-gray-700 text-white rounded-2xl focus:ring-2 focus:ring-specialtext transition-all duration-300 resize-y min-h-[120px] placeholder-gray-300"
            />

            {/* Error Handling */}
            {error && (
              <div className="flex items-center space-x-3 bg-red-900/30 border border-red-500/30 text-red-400 p-4 rounded-2xl">
                <XCircle className="w-6 h-6 text-red-500" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleUpload}
              disabled={loading || !file}
              className={`w-full py-4 rounded-2xl font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-3 ${
                loading || !file
                  ? "bg-specialtext text-black cursor-not-allowed"
                  : "text-black bg-specialtext hover:bg-yellow-500 hover:shadow-xl transform hover:scale-[1.02]"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <span>Generate Analysis</span>
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </button>
          </div>

          {/* Results Section (unchanged from previous version) */}
          <div className="relative">
            
            {analysis ? (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="bg-gray-800 rounded-2xl p-6 flex justify-between items-center border border-gray-700">
                  <h3 className="text-lg font-semibold text-white">Overall Score</h3>
                  <div className="text-4xl font-bold text-white">
                    {analysis.score || 0} <span className="text-base text-gray-300">/ 100</span>
                  </div>
                </div>

                {/* Analysis Details */}
                <div className="grid gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Summary Description
                    </h3>
                    <ReactMarkdown 
                      className="text-gray-300 text-sm"
                    >
                      {analysis.description || "No matching analysis available."}
                    </ReactMarkdown>
                  </div>
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Matching Analysis
                    </h3>
                    <ReactMarkdown 
                      className="text-gray-300 text-sm"
                    >
                      {analysis.matching_analysis || "No matching analysis available."}
                    </ReactMarkdown>
                  </div>

                  {jobDescription.trim() && (
                    <div className="bg-gray-800 rounded-2xl p-6 flex justify-between items-center border border-gray-700">
                      <h3 className="text-lg font-semibold text-white">Skill Match</h3>
                      <div className="text-4xl font-bold text-white">
                        {analysis.skill_match_score || 0} <span className="text-base text-gray-300">/ 100</span>
                      </div>
                    </div>
                  )}
                  

                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Recommendations
                    </h3>
                    <ReactMarkdown 
                      className="text-gray-300 text-sm"
                      components={{
                        ul: ({node, ...props}) => (
                          <ul className="list-disc list-inside space-y-2" {...props} />
                        )
                      }}
                    >
                      {analysis.recommendation || "No recommendations available."}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300">
                    Your AI-powered resume analysis will appear here
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default ResumeAnalyzer;