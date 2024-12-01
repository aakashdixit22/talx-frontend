


import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { ClipLoader } from "react-spinners";
import { Download, Eye, X, FileSpreadsheet } from "lucide-react";
import { b } from "framer-motion/client";
import MyJobsBg from "../assets/myjobsbg.jpg"


const ViewJobModal = ({ job, onClose }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://job-portal-backend-nm6k.onrender.com/api/jobApply/applicants/${job._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setApplicants(response.data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      } finally {
        setLoading(false);
      }
    };

    if (job) {
      fetchApplicants();
    }
  }, [job, token]);

  const createResumeURL = (resumeBinary) => {
    const blob = new Blob([new Uint8Array(resumeBinary.data)], {
      type: "application/pdf",
    });
    return window.URL.createObjectURL(blob);
  };

  const createCoverLetterURL = (coverLetter) => {
    const blob = new Blob([coverLetter], { type: "text/plain" });
    return window.URL.createObjectURL(blob);
  };

  const downloadResume = (application) => {
    const url = createResumeURL(application.resume);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resume_${application._id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadCoverLetter = (coverLetter, applicantId) => {
    const url = createCoverLetterURL(coverLetter);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cover_letter_${applicantId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const exportToExcel = () => {
    const worksheetData = applicants.map((applicant) => ({
      Name: applicant.applicantName,
      Email: applicant.applicantEmail,
      Phone: applicant.applicantPhone,
      Cover_Letter: applicant.coverLetter ? applicant.coverLetter : "Not Provided",
      Resume: applicant.resume ? "Provided" : "Not Provided",
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");

    XLSX.writeFile(workbook, `${job.jobTitle}_${job.companyName}_Applicants.xlsx`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="relative w-full max-w-5xl rounded-xl bg-white shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-200 hover:text-gray-500 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Job Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-7 rounded-t-xl"
        style={{
          backgroundImage: `url(${MyJobsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          }}>
          <h2 className="text-3xl font-bold text-center text-white">
            {job.jobTitle}
          </h2>
          <p className="text-center text-white/80 mt-2">{job.companyName}</p>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b">
          <div className="text-center">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold text-gray-700">{job.jobLocation}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Salary Range</p>
            <p className="font-semibold text-gray-700">
              {job.minPrice} - {job.maxPrice}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Employment Type</p>
            <p className="font-semibold text-gray-700">{job.employmentType}</p>
          </div>
        </div>

        {/* Applicants Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Applicants</h3>
            <button 
              onClick={exportToExcel}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              <FileSpreadsheet className="h-5 w-5" />
              Export to Excel
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <ClipLoader color="#3498db" size={50} />
            </div>
          ) : applicants.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    {["Name", "Email", "Phone", "Cover Letter", "Resume"].map((header) => (
                      <th 
                        key={header} 
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applicants.map((applicant) => (
                    <tr key={applicant._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{applicant.applicantName}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{applicant.applicantEmail}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{applicant.applicantPhone}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {applicant.coverLetter ? (
                          <div className="flex items-center space-x-2">
                            <a 
                              href={createCoverLetterURL(applicant.coverLetter)}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 transition-colors"
                            >
                              <Eye className="h-5 w-5" />
                            </a>
                            <button
                              onClick={() => downloadCoverLetter(applicant.coverLetter, applicant._id)}
                              className="text-green-500 hover:text-green-700 transition-colors"
                            >
                              <Download className="h-5 w-5" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-400">No cover letter</span>
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex items-center space-x-2">
                          <a 
                            href={createResumeURL(applicant.resume)}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                          >
                            <Eye className="h-5 w-5" />
                          </a>
                          <button
                            onClick={() => downloadResume(applicant)}
                            className="text-green-500 hover:text-green-700 transition-colors"
                          >
                            <Download className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">No applicants yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewJobModal;