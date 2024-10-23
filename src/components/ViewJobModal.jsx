// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const ViewJobModal = ({ job, onClose }) => {
// //   const [applicants, setApplicants] = useState([]);
// //   const token = localStorage.getItem("token");

// //   // Fetch applicants for the given job when the modal opens
// //   useEffect(() => {
// //     const fetchApplicants = async () => {
// //       try {
// //         const response = await axios.get(
// //           `https://job-portal-backend-nm6k.onrender.com/api/jobApply/applicants/${job._id}`,
// //           {
// //             headers: { Authorization: `Bearer ${token}` },
// //           }
// //         );
// //         setApplicants(response.data);
// //       } catch (error) {
// //         console.error("Error fetching applicants:", error);
// //       }
// //     };

// //     if (job) {
// //       fetchApplicants();
// //     }
// //   }, [job, token]);

// //   // Function to download the resume using the binary data already available in the state
// //   const downloadResume = (application) => {
// //     try {
// //       const { resume, _id } = application;

// //       // Create a Blob from the binary data (resume)
// //       const blob = new Blob([new Uint8Array(resume.data)], { type: "application/pdf" });
// //       const url = window.URL.createObjectURL(blob);

// //       // Create a link to trigger the download
// //       const a = document.createElement("a");
// //       a.href = url;
// //       a.download = `resume_${_id}.pdf`; // Name of the downloaded file
// //       document.body.appendChild(a);
// //       a.click();
// //       document.body.removeChild(a); // Clean up

// //     } catch (error) {
// //       console.error("Error downloading resume:", error);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
// //       <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
// //         <h2 className="text-xl font-bold mb-4">
// //           {job.jobTitle} - {job.companyName}
// //         </h2>
// //         <p>
// //           <strong>Location:</strong> {job.jobLocation}
// //         </p>
// //         <p>
// //           <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
// //         </p>
// //         <p>
// //           <strong>Employment Type:</strong> {job.employmentType}
// //         </p>

// //         <h3 className="text-lg font-bold mt-6 mb-2">Applicants</h3>
// //         {applicants.length > 0 ? (
// //           <table className="min-w-full bg-white border border-gray-200">
// //             <thead>
// //               <tr>
// //                 <th className="py-2 px-2 md:px-4 border-b">Name</th>
// //                 <th className="py-2 px-2 md:px-4 border-b">Email</th>
// //                 <th className="py-2 px-2 md:px-4 border-b">Phone</th>
// //                 <th className="py-2 px-2 md:px-4 border-b">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {applicants.map((applicant) => (
// //                 <tr key={applicant._id} className="border-t">
// //                   <td className="py-2 px-2 md:px-4 border-b">
// //                     {applicant.applicantName}
// //                   </td>
// //                   <td className="py-2 px-2 md:px-4 border-b">
// //                     {applicant.applicantEmail}
// //                   </td>
// //                   <td className="py-2 px-2 md:px-4 border-b">
// //                     {applicant.applicantPhone}
// //                   </td>
// //                   <td className="py-2 px-2 md:px-4 border-b">
// //                     <button
// //                       className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded"
// //                       onClick={() => downloadResume(applicant)}
// //                     >
// //                       Download Resume
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         ) : (
// //           <p>No applicants yet.</p>
// //         )}

// //         <button
// //           className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
// //           onClick={onClose}
// //         >
// //           Close
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewJobModal;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ViewJobModal = ({ job, onClose }) => {
//   const [applicants, setApplicants] = useState([]);
//   const token = localStorage.getItem("token");

//   // Fetch applicants for the given job when the modal opens
//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await axios.get(
//           `https://job-portal-backend-nm6k.onrender.com/api/jobApply/applicants/${job._id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setApplicants(response.data);
//       } catch (error) {
//         console.error("Error fetching applicants:", error);
//       }
//     };

//     if (job) {
//       fetchApplicants();
//     }
//   }, [job, token]);

//   // Function to download the resume using the binary data already available in the state
//   const downloadResume = (application) => {
//     try {
//       const { resume, _id } = application;

//       // Create a Blob from the binary data (resume)
//       const blob = new Blob([new Uint8Array(resume.data)], { type: "application/pdf" });
//       const url = window.URL.createObjectURL(blob);

//       // Create a link to trigger the download
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `resume_${_id}.pdf`; // Name of the downloaded file
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a); // Clean up
//     } catch (error) {
//       console.error("Error downloading resume:", error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
//         <h2 className="text-xl font-bold mb-4">
//           {job.jobTitle} - {job.companyName}
//         </h2>
//         <p>
//           <strong>Location:</strong> {job.jobLocation}
//         </p>
//         <p>
//           <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
//         </p>
//         <p>
//           <strong>Employment Type:</strong> {job.employmentType}
//         </p>

//         <h3 className="text-lg font-bold mt-6 mb-2">Applicants</h3>
//         {applicants.length > 0 ? (
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th className="py-2 px-2 md:px-4 border-b">Name</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Email</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Phone</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Cover Letter</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants.map((applicant) => (
//                 <tr key={applicant._id} className="border-t">
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.applicantName}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.applicantEmail}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.applicantPhone}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {/* Display cover letter if available */}
//                     {applicant.coverLetter ? (
//                       <div>
//                         <button
//                           className="bg-green-500 text-white px-3 py-2 rounded"
//                           onClick={() => alert(applicant.coverLetter)}>
//                           View Cover Letter
//                         </button>
//                       </div>
//                     ) : (
//                       <span>No cover letter provided</span>
//                     )}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     <button
//                       className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded"
//                       onClick={() => downloadResume(applicant)}
//                     >
//                       Download Resume
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No applicants yet.</p>
//         )}

//         <button
//           className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default ViewJobModal;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ViewJobModal = ({ job, onClose }) => {
//   const [applicants, setApplicants] = useState([]);
//   const token = localStorage.getItem("token");

//   // Fetch applicants for the given job when the modal opens
//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await axios.get(
//           `https://job-portal-backend-nm6k.onrender.com/api/jobApply/applicants/${job._id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setApplicants(response.data);
//       } catch (error) {
//         console.error("Error fetching applicants:", error);
//       }
//     };

//     if (job) {
//       fetchApplicants();
//     }
//   }, [job, token]);

//   // Function to download the resume using the binary data already available in the state
//   const downloadResume = (application) => {
//     try {
//       const { resume, _id } = application;

//       // Create a Blob from the binary data (resume)
//       const blob = new Blob([new Uint8Array(resume.data)], { type: "application/pdf" });
//       const url = window.URL.createObjectURL(blob);

//       // Create a link to trigger the download
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `resume_${_id}.pdf`; // Name of the downloaded file
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a); // Clean up
//     } catch (error) {
//       console.error("Error downloading resume:", error);
//     }
//   };

//   // Function to download the cover letter as a .txt file
//   const downloadCoverLetter = (coverLetter, applicantId) => {
//     const blob = new Blob([coverLetter], { type: "text/plain" });
//     const url = window.URL.createObjectURL(blob);

//     // Create a link to trigger the download
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `cover_letter_${applicantId}.txt`; // Name of the downloaded file
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a); // Clean up
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
//         <h2 className="text-xl font-bold mb-4">
//           {job.jobTitle} - {job.companyName}
//         </h2>
//         <p>
//           <strong>Location:</strong> {job.jobLocation}
//         </p>
//         <p>
//           <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
//         </p>
//         <p>
//           <strong>Employment Type:</strong> {job.employmentType}
//         </p>

//         <h3 className="text-lg font-bold mt-6 mb-2">Applicants</h3>
//         {applicants.length > 0 ? (
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th className="py-2 px-2 md:px-4 border-b">Name</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Email</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Phone</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Cover Letter</th>
//                 <th className="py-2 px-2 md:px-4 border-b">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applicants.map((applicant) => (
//                 <tr key={applicant._id} className="border-t">
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.applicantName}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.applicantEmail}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.applicantPhone}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     {applicant.coverLetter ? (
//                       <div>
//                         <span className="text-blue-500 cursor-pointer" onClick={() => downloadCoverLetter(applicant.coverLetter, applicant._id)}>
//                           View Cover Letter
//                         </span>
//                       </div>
//                     ) : (
//                       <span>No cover letter provided</span>
//                     )}
//                   </td>
//                   <td className="py-2 px-2 md:px-4 border-b">
//                     <button
//                       className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded"
//                       onClick={() => downloadResume(applicant)}
//                     >
//                       Download Resume
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No applicants yet.</p>
//         )}

//         <button
//           className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewJobModal;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ViewJobModal = ({ job, onClose }) => {
//   const [applicants, setApplicants] = useState([]);
//   const token = localStorage.getItem("token");

//   // Fetch applicants for the given job when the modal opens
//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await axios.get(
//           `https://job-portal-backend-nm6k.onrender.com/api/jobApply/applicants/${job._id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setApplicants(response.data);
//       } catch (error) {
//         console.error("Error fetching applicants:", error);
//       }
//     };

//     if (job) {
//       fetchApplicants();
//     }
//   }, [job, token]);

//   // Function to download the resume using the binary data already available in the state
//   const downloadResume = (application) => {
//     try {
//       const { resume, _id } = application;

//       // Create a Blob from the binary data (resume)
//       const blob = new Blob([new Uint8Array(resume.data)], { type: "application/pdf" });
//       const url = window.URL.createObjectURL(blob);

//       // Create a link to trigger the download
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `resume_${_id}.pdf`; // Name of the downloaded file
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a); // Clean up
//     } catch (error) {
//       console.error("Error downloading resume:", error);
//     }
//   };

//   // Function to download the cover letter as a .txt file
//   const downloadCoverLetter = (coverLetter, applicantId) => {
//     const blob = new Blob([coverLetter], { type: "text/plain" });
//     const url = window.URL.createObjectURL(blob);

//     // Create a link to trigger the download
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `cover_letter_${applicantId}.txt`; // Name of the downloaded file
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a); // Clean up
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center p-4">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {job.jobTitle} - {job.companyName}
//         </h2>
//         <div className="mb-4">
//           <p className="mb-2">
//             <strong>Location:</strong> {job.jobLocation}
//           </p>
//           <p className="mb-2">
//             <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
//           </p>
//           <p className="mb-2">
//             <strong>Employment Type:</strong> {job.employmentType}
//           </p>
//         </div>

//         <h3 className="text-lg font-bold mt-6 mb-2">Applicants</h3>
//         {applicants.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-2 md:px-4 border-b">Name</th>
//                   <th className="py-2 px-2 md:px-4 border-b">Email</th>
//                   <th className="py-2 px-2 md:px-4 border-b">Phone</th>
//                   <th className="py-2 px-2 md:px-4 border-b">Cover Letter</th>
//                   <th className="py-2 px-2 md:px-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {applicants.map((applicant) => (
//                   <tr key={applicant._id} className="border-t">
//                     <td className="py-2 px-2 md:px-4 border-b">
//                       {applicant.applicantName}
//                     </td>
//                     <td className="py-2 px-2 md:px-4 border-b">
//                       {applicant.applicantEmail}
//                     </td>
//                     <td className="py-2 px-2 md:px-4 border-b">
//                       {applicant.applicantPhone}
//                     </td>
//                     <td className="py-2 px-2 md:px-4 border-b">
//                       {applicant.coverLetter ? (
//                         <div>
//                           <span className="text-blue-500 cursor-pointer" onClick={() => downloadCoverLetter(applicant.coverLetter, applicant._id)}>
//                             View Cover Letter
//                           </span>
//                         </div>
//                       ) : (
//                         <span>No cover letter provided</span>
//                       )}
//                     </td>
//                     <td className="py-2 px-2 md:px-4 border-b">
//                       <button
//                         className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded hover:bg-blue-600 transition-all"
//                         onClick={() => downloadResume(applicant)}
//                       >
//                         Download Resume
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p>No applicants yet.</p>
//         )}

//         <button
//           className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewJobModal;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ViewJobModal = ({ job, onClose }) => {
//   const [applicants, setApplicants] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await axios.get(
//           `https://job-portal-backend-nm6k.onrender.com/api/jobApply/applicants/${job._id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setApplicants(response.data);
//       } catch (error) {
//         console.error("Error fetching applicants:", error);
//       }
//     };

//     if (job) {
//       fetchApplicants();
//     }
//   }, [job, token]);

//   const createResumeURL = (resumeBinary) => {
//     const blob = new Blob([new Uint8Array(resumeBinary.data)], {
//       type: "application/pdf",
//     });
//     return window.URL.createObjectURL(blob);
//   };

//   const createCoverLetterURL = (coverLetter) => {
//     const blob = new Blob([coverLetter], { type: "text/plain" });
//     return window.URL.createObjectURL(blob);
//   };

//   const downloadResume = (application) => {
//     const url = createResumeURL(application.resume);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `resume_${application._id}.pdf`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   const downloadCoverLetter = (coverLetter, applicantId) => {
//     const url = createCoverLetterURL(coverLetter);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `cover_letter_${applicantId}.txt`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center p-4">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           {job.jobTitle} - {job.companyName}
//         </h2>
//         <div className="mb-6 text-center">
//           <p className="mb-2 text-gray-700">
//             <strong>Location:</strong> {job.jobLocation}
//           </p>
//           <p className="mb-2 text-gray-700">
//             <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}
//           </p>
//           <p className="mb-2 text-gray-700">
//             <strong>Employment Type:</strong> {job.employmentType}
//           </p>
//         </div>

//         <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Applicants</h3>
//         {applicants.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-3 px-4 border-b text-left text-gray-600">
//                     Name
//                   </th>
//                   <th className="py-3 px-4 border-b text-left text-gray-600">
//                     Email
//                   </th>
//                   <th className="py-3 px-4 border-b text-left text-gray-600">
//                     Phone
//                   </th>
//                   <th className="py-3 px-4 border-b text-center text-gray-600">
//                     Cover Letter
//                   </th>
//                   <th className="py-3 px-4 border-b text-center text-gray-600">
//                     Resume
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {applicants.map((applicant) => (
//                   <tr key={applicant._id} className="border-t">
//                     <td className="py-3 px-4 border-b text-gray-700">
//                       {applicant.applicantName}
//                     </td>
//                     <td className="py-3 px-4 border-b text-gray-700">
//                       {applicant.applicantEmail}
//                     </td>
//                     <td className="py-3 px-4 border-b text-gray-700">
//                       {applicant.applicantPhone}
//                     </td>
//                     <td className="py-3 px-4 border-b text-gray-700 text-center">
//                       {applicant.coverLetter ? (
//                         <div className="flex justify-center space-x-2">
//                           <a
//                             href={createCoverLetterURL(applicant.coverLetter)}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 hover:underline p-1"
//                           >
//                             View
//                           </a>
//                           <button
//                             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
//                             onClick={() =>
//                               downloadCoverLetter(
//                                 applicant.coverLetter,
//                                 applicant._id
//                               )
//                             }
//                           >
//                             Download
//                           </button>
//                         </div>
//                       ) : (
//                         <span>No cover letter</span>
//                       )}
//                     </td>
//                     <td className="py-3 px-4 border-b text-gray-700 text-center">
//                       <div className="flex justify-center space-x-2">
//                         <a
//                           href={createResumeURL(applicant.resume)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline py-1"
//                         >
//                           View
//                         </a>
//                         <button
//                           className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none"
//                           onClick={() => downloadResume(applicant)}
//                         >
//                           Download
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-gray-700">No applicants yet.</p>
//         )}

//         <button
//           className="mt-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all focus:outline-none"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewJobModal;



import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // Import xlsx for Excel export

const ViewJobModal = ({ job, onClose }) => {
  const [applicants, setApplicants] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApplicants = async () => {
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
        {applicants.length > 0 ? (
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



