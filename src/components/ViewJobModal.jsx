import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import ClipLoader from "react-spinners/ClipLoader"; // Import ClipLoader

const ViewJobModal = ({ job, onClose }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for the loader
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true); // Show loader
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
        setLoading(false); // Hide loader
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

    // Generate Excel file and download
    XLSX.writeFile(workbook, `${job.jobTitle}_${job.companyName}_Applicants.xlsx`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {job.jobTitle} - {job.companyName}
        </h2>
        <div className="mb-6 text-center">
          <p className="mb-2 text-gray-700">
            <strong>Location:</strong> {job.jobLocation}
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Employment Type:</strong> {job.employmentType}
          </p>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Applicants</h3>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <ClipLoader color="#3498db" size={50} /> {/* Circular loader */}
          </div>
        ) : applicants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Name
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Email
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Phone
                  </th>
                  <th className="py-3 px-4 border-b text-center text-gray-600">
                    Cover Letter
                  </th>
                  <th className="py-3 px-4 border-b text-center text-gray-600">
                    Resume
                  </th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr key={applicant._id} className="border-t">
                    <td className="py-3 px-4 border-b text-gray-700">
                      {applicant.applicantName}
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700">
                      {applicant.applicantEmail}
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700">
                      {applicant.applicantPhone}
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700 text-center">
                      {applicant.coverLetter ? (
                        <div className="flex justify-center space-x-2">
                          <a
                            href={createCoverLetterURL(applicant.coverLetter)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline p-1"
                          >
                            View
                          </a>
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
                            onClick={() =>
                              downloadCoverLetter(
                                applicant.coverLetter,
                                applicant._id
                              )
                            }
                          >
                            Download
                          </button>
                        </div>
                      ) : (
                        <span>No cover letter</span>
                      )}
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700 text-center">
                      <div className="flex justify-center space-x-2">
                        <a
                          href={createResumeURL(applicant.resume)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline py-1"
                        >
                          View
                        </a>
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
                          onClick={() => downloadResume(applicant)}
                        >
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-700">No applicants yet.</p>
        )}

        <div className="mt-6 flex justify-between">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all focus:outline-none"
            onClick={exportToExcel}
          >
            Export to Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewJobModal;
