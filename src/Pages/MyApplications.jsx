import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const MyApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const userEmail = localStorage.getItem("email");

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(
                    `https://job-portal-backend-nm6k.onrender.com/api/jobApply/my-applications/${userEmail}`
                );

                if (response.data && response.data.applications) {
                    setApplications(response.data.applications);
                } else {
                    setApplications([]);
                }
            } catch (error) {
                console.error("Error fetching applications", error);
                setApplications([]);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [userEmail]);

    const handleDownloadResume = (resumeBinary) => {
        const blob = new Blob([new Uint8Array(resumeBinary.data)], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.pdf";
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container mx-auto p-8 min-h-screen bg-navy">
            <h1 className="text-4xl font-bold text-white mb-10 text-center border-b-4 border-white pb-4">
                My Applications
            </h1>
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <ClipLoader color="#ffffff" size={50} />
                </div>
            ) : applications.length === 0 ? (
                <p className="text-white text-center text-xl mt-10">You have not applied for any jobs yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {applications.map((application) => (
                        <div
                            key={application._id}
                            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h2 className="text-xl font-semibold text-gray-900">{application.jobId?.jobTitle}</h2>
                            <p className="text-sm text-gray-700 mb-2">{application.jobId?.companyName}</p>
                            <p className="text-sm text-gray-700 mb-2">
                                Salary: {application.jobId?.minPrice} - {application.jobId?.maxPrice}
                            </p>
                            <p className="text-sm text-gray-700 mb-2">Location: {application.jobId?.jobLocation}</p>
                            <p className="text-sm text-gray-700 mb-2">
                                Description: {application.jobId?.description}
                            </p>
                            <p className="text-sm text-gray-600 mt-4">
                                <span className="font-semibold">Applied on:</span>{" "}
                                {new Date(application.appliedAt).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => handleDownloadResume(application.resume)}
                                className="bg-specialtext hover:bg-yellow-600 text-black p-2 font-semibold mt-4 block text-center border border-white rounded-lg py-2 transition-colors"
                            >
                                Download Resume
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyApplications;
