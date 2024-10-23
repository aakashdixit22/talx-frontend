// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import EditJobModal from "../components/EditJobModal"; // Import EditJobModal component
// import { Toaster } from "react-hot-toast";

// const Myjob = () => {
//   const email = localStorage.getItem("email");
//   const [jobs, setJobs] = useState([]);
//   const [originalJobs, setOriginalJobs] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [editingJob, setEditingJob] = useState(null);
//   const token = localStorage.getItem("token");

//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   const jobsPerPage = 5; // Number of jobs per page

//   const navigate = useNavigate();

//   const fetchJobs = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://job-portal-backend-nm6k.onrender.com/api/jobs/myJobs/${email}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setJobs(response.data);
//       setOriginalJobs(response.data);
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [email]);

//   const handleSearch = () => {
//     const filteredJobs = originalJobs.filter((job) =>
//       job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setJobs(filteredJobs);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleEdit = (job) => {
//     setEditingJob(job);
//     setShowModal(true);
//   };

//   const handleDelete = async (jobId) => {
//     try {
//       await axios.delete(`https://job-portal-backend-nm6k.onrender.com/api/jobs/delete-job/${jobId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const updatedJobs = jobs.filter((job) => job._id !== jobId);
//       setJobs(updatedJobs);
//     } catch (error) {
//       console.error("Error deleting job:", error);
//     }
//   };

//   // Calculate the jobs to display for the current page
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//   // Function to handle page changes
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} duration={4000} />
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
//         <div className="my-jobs-container">
//           <h1 className="text-center p-4 text-2xl md:text-3xl font-bold">
//             My Jobs
//           </h1>
//           <div className="search-box text-center p-2">
//             <input
//               onChange={(e) => setSearchText(e.target.value)}
//               type="text"
//               name="search"
//               id="search"
//               onKeyPress={handleKeyPress}
//               placeholder="Search jobs..."
//               className="py-2 pl-3 border-2 shadow-md focus:outline-none lg:w-6/12 w-full mb-4"
//             />
//             <button
//               className="bg-blue text-white shadow-md font-semibold px-6 py-2 rounded-sm mb-4 md:px-8 w-full md:w-auto"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <table className="min-w-full bg-white border border-gray-200">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Logo
//                     </th>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Job Title
//                     </th>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Company Name
//                     </th>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Location
//                     </th>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Salary
//                     </th>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Employment Type
//                     </th>
//                     <th className="py-2 px-2 md:px-4 border-b text-center">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentJobs.map((job) => (
//                     <tr key={job._id} className="border-t">
//                       <td className="py-2 px-2 md:px-4 border-b text-center flex justify-center items-center">
//                         <img
//                           src={job.companyLogo}
//                           alt={`${job.companyName} logo`}
//                           className="w-8 h-8 md:w-10 md:h-10 object-cover"
//                         />
//                       </td>
//                       <td className="py-2 px-2 md:px-4 border-b text-center">
//                         {job.jobTitle}
//                       </td>
//                       <td className="py-2 px-2 md:px-4 border-b text-center">
//                         {job.companyName}
//                       </td>
//                       <td className="py-2 px-2 md:px-4 border-b text-center">
//                         {job.jobLocation}
//                       </td>
//                       <td className="py-2 px-2 md:px-4 border-b text-center">
//                         {job.minPrice} - {job.maxPrice}
//                       </td>
//                       <td className="py-2 px-2 md:px-4 border-b text-center">
//                         {job.employmentType}
//                       </td>
//                       <td className="py-2 px-2 md:px-4 border-b text-center">
//                         <button
//                           className="bg-yellow-500 text-white px-3 md:px-4 py-2 rounded mr-2"
//                           onClick={() => handleEdit(job)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="bg-red-500 text-white px-3 md:px-4 py-2 rounded"
//                           onClick={() => handleDelete(job._id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Pagination Controls */}
//           {/* Pagination Controls */}
//           <div className="pagination mt-4 flex justify-center items-center">
//             {/* Previous button */}
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="mx-2 px-3 py-2 border-2 shadow-2xl rounded font-semibold bg-white text-black hover:bg-gray-200 disabled:opacity-50"
//             >
//               Prev
//             </button>

//             {/* Page numbers */}
//             {Array.from(
//               { length: Math.ceil(jobs.length / jobsPerPage) },
//               (_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => paginate(index + 1)}
//                   className={`mx-1 px-3 py-2 border-2 shadow-2xl rounded ${
//                     currentPage === index + 1
//                       ? "bg-blue text-white"
//                       : "bg-white text-black hover:bg-gray-200"
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               )
//             )}

//             {/* Next button */}
//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
//               className="mx-2 px-3 py-2 border-2 shadow-lg rounded bg-white text-black hover:bg-gray-200 disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         {showModal && (
//           <EditJobModal
//   job={editingJob}
//   onClose={() => setShowModal(false)}
//   onSave={fetchJobs}
// />

//         )}
//       </div>
//     </>
//   );
// };

// export default Myjob;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditJobModal from "../components/EditJobModal";
import ViewJobModal from "../components/ViewJobModal"; // Import the new ViewJobModal component
import { Toaster } from "react-hot-toast";

const Myjob = () => {
  const email = localStorage.getItem("email");
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [viewingJob, setViewingJob] = useState(null); // State to track job being viewed
  const token = localStorage.getItem("token");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const navigate = useNavigate();

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://job-portal-backend-nm6k.onrender.com/api/jobs/myJobs/${email}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setJobs(response.data);
      setOriginalJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [email]);

  const handleSearch = () => {
    const filteredJobs = originalJobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setShowEditModal(true);
  };

  const handleView = (job) => {
    setViewingJob(job); // Set the job being viewed
    setShowViewModal(true); // Show the view modal
  };

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(
        `https://job-portal-backend-nm6k.onrender.com/api/jobs/delete-job/${jobId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      setJobs(updatedJobs);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} duration={4000} />
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="my-jobs-container">
          <h1 className="text-center p-4 text-2xl md:text-3xl font-bold">My Jobs</h1>
          <div className="search-box text-center p-2">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              name="search"
              id="search"
              onKeyPress={handleKeyPress}
              placeholder="Search jobs..."
              className="py-2 pl-3 border-2 shadow-md focus:outline-none lg:w-6/12 w-full mb-4"
            />
            <button
              className="bg-blue text-white shadow-md font-semibold px-6 py-2 rounded-sm mb-4 md:px-8 w-full md:w-auto"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Logo</th>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Job Title</th>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Company Name</th>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Location</th>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Salary</th>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Employment Type</th>
                    <th className="py-2 px-2 md:px-4 border-b text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentJobs.map((job) => (
                    <tr key={job._id} className="border-t">
                      <td className="py-2 px-2 md:px-4 border-b text-center flex justify-center items-center">
                        <img
                          src={job.companyLogo}
                          alt={`${job.companyName} logo`}
                          className="w-8 h-8 md:w-10 md:h-10 object-cover"
                        />
                      </td>
                      <td className="py-2 px-2 md:px-4 border-b text-center">{job.jobTitle}</td>
                      <td className="py-2 px-2 md:px-4 border-b text-center">{job.companyName}</td>
                      <td className="py-2 px-2 md:px-4 border-b text-center">{job.jobLocation}</td>
                      <td className="py-2 px-2 md:px-4 border-b text-center">
                        {job.minPrice} - {job.maxPrice}
                      </td>
                      <td className="py-2 px-2 md:px-4 border-b text-center">{job.employmentType}</td>
                      <td className="py-2 px-2 md:px-4 border-b text-center">
                        <button
                          className="bg-yellow-500 text-white px-3 md:px-4 py-2 rounded mr-2"
                          onClick={() => handleEdit(job)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 md:px-4 py-2 rounded"
                          onClick={() => handleDelete(job._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded ml-2"
                          onClick={() => handleView(job)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="pagination mt-4 flex justify-center items-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-2 px-3 py-2 border-2 shadow-2xl rounded font-semibold bg-white text-black hover:bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from(
              { length: Math.ceil(jobs.length / jobsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-2 border-2 shadow-2xl rounded ${
                    currentPage === index + 1
                      ? "bg-blue text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
              className="mx-2 px-3 py-2 border-2 shadow-lg rounded bg-white text-black hover:bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <EditJobModal
          job={editingJob}
          onClose={() => setShowEditModal(false)}
          onSave={fetchJobs}
          fetchJobs={fetchJobs}
        />
      )}

      {/* View Modal */}
      {showViewModal && (
        <ViewJobModal
          job={viewingJob}
          onClose={() => setShowViewModal(false)}
        />
      )}
    </>
  );
};

export default Myjob;
