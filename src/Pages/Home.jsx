import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/jobs/all-jobs`);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const [query, setQuery] = useState('');
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter jobs by title
  const filterJobs = jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()));

  // Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button-based filtering functions
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Next page function
  const nextPage = () => {
    if (currentPage < Math.ceil(filterJobs.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page function
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Main filtering function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filterJobs;
    }

    // Category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, postingDate, salaryType, employmentType }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) === parseInt(selected) ||
        postingDate >= selected ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
    }

    // Slice the data based on the current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* Main content */}
      <div className="bg-[#efecec] md:grid grid-cols-4 gap-10 lg:px-24 px-4 py-12">
        {/* Leftside section */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job card section */}
        <div className="bg-white rounded-sm col-span-2 p-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <ClipLoader color="#000" size={50} />
            </div>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="font-bold">{result.length} Jobs</h3>
              <p>No Jobs Found</p>
            </>
          )}

          {/* Pagination section */}
          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline">Previous</button>
              <span className="mx-2">Page {currentPage} of {Math.ceil(filterJobs.length / itemsPerPage)}</span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filterJobs.length / itemsPerPage)} className="underline">Next</button>
            </div>
          )}
        </div>

        {/* Rightside section */}
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
