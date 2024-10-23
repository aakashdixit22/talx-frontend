import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const userEmail = localStorage.getItem("email");

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/jobApply/my-applications/${userEmail}`);

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

    if (loading) {
        return <p className="text-white">Loading...</p>;
    }

    const handleDownloadResume = (resumeBinary) => {
        const blob = new Blob([new Uint8Array(resumeBinary.data)], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container mx-auto p-6 bg-navy min-h-screen">
                        <h1 className="text-4xl font-semibold mb-10 text-white text-center">My Applications</h1>
            {applications.length === 0 ? (
                <p className="text-white">You have not applied for any jobs yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.map((application) => (
                        <div key={application._id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-bold text-navy">{application.jobId?.jobTitle}</h2>
                            <p className="text-sm text-navy">{application.jobId?.companyName}</p>
                            <p className="text-sm text-navy">
                                {application.jobId?.minPrice} - {application.jobId?.maxPrice}
                            </p>
                            <p className="text-sm text-navy">{application.jobId?.jobLocation}</p>
                            <p className="text-sm text-navy">{application.jobId?.description}</p>
                            <p className="mt-4 text-navy">
                                <span className="font-semibold">Applied on: </span>
                                {new Date(application.appliedAt).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => handleDownloadResume(application.resume)}
                                className="text-blue-600 mt-4 inline-block"
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