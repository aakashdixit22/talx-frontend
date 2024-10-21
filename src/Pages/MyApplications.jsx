// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyApplications = () => {
//     const [applications, setApplications] = useState([]); // Ensure it's always initialized as an array
//     const [loading, setLoading] = useState(true); // To handle the loading state
//     const userEmail = localStorage.getItem("email"); // Replace this with dynamic email from user auth

//     useEffect(() => {
//         // Fetch applications for the user
//         const fetchApplications = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/jobApply/my-applications/${userEmail}`);
                
//                 // Check if response.data and response.data.applications exist
//                 if (response.data && response.data.applications) {
//                     setApplications(response.data.applications);
//                 } else {
//                     setApplications([]); // Fallback to empty array if no applications
//                 }

//             } catch (error) {
//                 console.error("Error fetching applications", error);
//                 setApplications([]); // Fallback to empty array on error
//             } finally {
//                 setLoading(false); // Stop loading regardless of success or failure
//             }
//         };

//         fetchApplications();
//     }, [userEmail]);

//     if (loading) {
//         return <p>Loading...</p>; // Optionally show a loading state while fetching data
//     }

//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-2xl font-semibold mt-20 mb-6">My Applications</h1>
//             {applications.length === 0 ? (
//                 <p>You have not applied for any jobs yet.</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {applications.map((application) => (
//                         <div key={application._id} className="bg-white shadow-md rounded-lg p-4">
//                             <h2 className="text-lg font-bold">{application.jobId?.jobTitle}</h2> {/* Optional chaining for safety */}
//                             <p className="text-sm">{application.jobId?.companyName}</p>
//                             <p className="text-sm">
//                                 {application.jobId?.minPrice} - {application.jobId?.maxPrice}
//                             </p>
//                             <p className="text-sm">{application.jobId?.jobLocation}</p>
//                             <p className="text-sm">{application.jobId?.description}</p>
//                             <p className="mt-4">
//                                 <span className="font-semibold">Applied on: </span>
//                                 {new Date(application.appliedAt).toLocaleDateString()}
//                             </p>
//                             <a
//                                 href="#"
//                                 className="text-blue-600 mt-4 inline-block"
//                                 download
//                             >
//                                 Download Resume
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyApplications;

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
        return <p>Loading...</p>;
    }

    const handleDownloadResume = (resumeBinary) => {
        // Convert the binary resume to a Blob
        const blob = new Blob([new Uint8Array(resumeBinary.data)], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        
        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf'; // You can customize the file name here
        link.click();
        
        // Revoke the object URL after the download is triggered
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mt-20 mb-6">My Applications</h1>
            {applications.length === 0 ? (
                <p>You have not applied for any jobs yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.map((application) => (
                        <div key={application._id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-bold">{application.jobId?.jobTitle}</h2>
                            <p className="text-sm">{application.jobId?.companyName}</p>
                            <p className="text-sm">
                                {application.jobId?.minPrice} - {application.jobId?.maxPrice}
                            </p>
                            <p className="text-sm">{application.jobId?.jobLocation}</p>
                            <p className="text-sm">{application.jobId?.description}</p>
                            <p className="mt-4">
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
