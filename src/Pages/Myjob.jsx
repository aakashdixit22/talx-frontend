import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Myjob = () => {
  const email = "nofiyi3358@nastyx.com";
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/myJobs/${email}`
        );
        setJobs(response.data);
        setOriginalJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [email]);

  const handleSearch = () => {
    const filter = originalJobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobs(filter);
  };

  const handleEdit = (jobId) => {
    // Navigate to edit page or open a modal to edit job details
    // For example, navigate to an edit page
    navigate(`/${jobId}`);

    
    
    
  };

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/delete-job/${jobId}`);
      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      console.log("deleted job id:", jobId);
      setJobs(updatedJobs);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4 text-2xl md:text-3xl font-bold">My Jobs</h1>
        <div className="search-box text-center p-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="Search jobs..."
            className="py-2 pl-3 border-2 shadow-md focus:outline-none lg:w-6/12 w-full mb-4"
          />
          <button
            className="bg-blue-500 text-white shadow-md font-semibold px-6 py-2 rounded-sm mb-4 md:px-8"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Logo</th>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Job Title</th>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Company</th>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Location</th>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Salary</th>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Posting Date</th>
                  <th className="py-2 px-2 md:px-4 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job._id} className="border-t">
                    <td className="py-2 px-2 md:px-4 border-b text-center flex justify-center items-center">
                      <img
                        src={job.companyLogo}
                        alt={`${job.companyName} logo`}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b text-center">{job.jobTitle}</td>
                    <td className="py-2 px-2 md:px-4 border-b text-center">{job.companyName}</td>
                    <td className="py-2 px-2 md:px-4 border-b text-center">{job.jobLocation}</td>
                    <td className="py-2 px-2 md:px-4 border-b text-center">
                      {job.minPrice} - {job.maxPrice} {job.salaryType}
                    </td>
                    <td className="py-2 px-2 md:px-4 border-b text-center">{job.postingDate}</td>
                    <td className="py-2 px-2 md:px-4 border-b text-center">
                      <button
                        className="bg-yellow-500 text-white px-3 md:px-4 py-2 rounded mr-2"
                        onClick={() => handleEdit(job._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 md:px-4 py-2 rounded"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myjob;
