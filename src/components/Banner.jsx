import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className='max-w-screen bg-navy  mx-auto xl:px-24 px-4 md:py-20 py-20'>
      <h1 className='text-5xl font-bold text-white mb-5 mt-5 text-center'>
        Find your <span className='text-specialtext'>Job</span> today
      </h1>
      <p className='text-lg text-white mb-8 font-semibold text-center'>
        Explore thousands of jobs in Computer, Engineering and Tech sectors.
      </p>

      <form className='flex justify-center'>
        <div className='flex flex-col md:flex-row md:gap-4 gap-4 w-full max-w-3xl'>
          <div className='flex items-center bg-white rounded-md shadow-md w-full relative'>
            <FiSearch className='absolute left-3 text-gray-500' />
            <input
              type="text"
              name="title"
              id="title"
              className='block w-full border-none bg-white py-3 pl-10 pr-4 text-gray-900 placeholder-gray-600 rounded-md focus:ring-2 focus:ring-specialtext focus:outline-none'
              placeholder="Search for a job title"
              onChange={handleInputChange}
              value={query}
            />
          </div>

          <button type="submit" className='bg-specialtext hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md shadow-md transition duration-300'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;