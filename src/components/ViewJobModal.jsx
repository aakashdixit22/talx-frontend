import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewJobModal = ({ job, onClose }) => {
  const [applicants, setApplicants] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch applicants for the given job when the modal opens
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/jobApply/applicants/${job._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setApplicants(response.data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    if (job) {
      fetchApplicants();
    }
  }, [job, token]);

  // Function to download the resume using the binary data already available in the state
  const downloadResume = (application) => {
    try {
      const { resume, _id } = application;

      // Create a Blob from the binary data (resume)
      const blob = new Blob([new Uint8Array(resume.data)], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      // Create a link to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = `resume_${_id}.pdf`; // Name of the downloaded file
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a); // Clean up the DOM

    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">
          {job.jobTitle} - {job.companyName}
        </h2>
        <p>
          <strong>Location:</strong> {job.jobLocation}
        </p>
        <p>
          <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
        </p>
        <p>
          <strong>Employment Type:</strong> {job.employmentType}
        </p>

        <h3 className="text-lg font-bold mt-6 mb-2">Applicants</h3>
        {applicants.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4 border-b">Name</th>
                <th className="py-2 px-2 md:px-4 border-b">Email</th>
                <th className="py-2 px-2 md:px-4 border-b">Phone</th>
                <th className="py-2 px-2 md:px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant._id} className="border-t">
                  <td className="py-2 px-2 md:px-4 border-b">
                    {applicant.applicantName}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {applicant.applicantEmail}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    {applicant.applicantPhone}
                  </td>
                  <td className="py-2 px-2 md:px-4 border-b">
                    <button
                      className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded"
                      onClick={() => downloadResume(applicant)}
                    >
                      Download Resume
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No applicants yet.</p>
        )}

        <button
          className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewJobModal;
