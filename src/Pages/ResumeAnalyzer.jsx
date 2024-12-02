import React, { useState } from "react";

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/upload-resume", {
        method: "POST",
        headers: {
          Authorization: import.meta.env.VITE_AUTH_SECRET, // Replace with your actual secret
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setSummary(data.summary);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-xl font-bold mb-4 text-gray-800 text-center">
          Upload Resume
        </h1>

        <div className="mb-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Enter job description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full py-2 text-white font-bold rounded-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Uploading..." : "Generate Summary"}
        </button>

        {summary && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Summary:</h2>
            <p className="text-gray-700 text-sm">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;