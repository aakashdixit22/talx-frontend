import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className='max-w-screen-2xl bg-navy container mx-auto xl:px-24 px-4 md:py-20 py-20'>
      <h1 className='text-5xl font-bold text-white mb-5 mt-5'>
        Find your <span className='text-specialtext'>Fucking Job</span> today
      </h1>
      <p className='text-lg text-white mb-8 font-semibold'>
        Explore thousands of jobs in Computer, Engineering and Tech sectors.
      </p>

      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex md:rounded-s-sm rounded ring-1 ring-inset ring-cyan-800 md:w-1/2 w-full relative'>
            <input
              type="text"
              name="title"
              id="title"
              className='block flex-1 border-navy bg-white py-1.5 pl-8 text-gray-900 placeholder-gray-600 sm:text-sm sm:leading-6'
              placeholder="Search for a job title "
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className='absolute mt-2.5 ml-2' />
          </div>

          {/* Separation line */}
          <div className='hidden md:block w-px bg-gray-300 mx-4'></div>

          <div className='flex md:rounded-s-none rounded ring-1 ring-inset ring-cyan-800 md:w-1/3 w-full relative'>
            <input
              type="text"
              name="location"
              id="location"
              className='block flex-1 border-navy bg-white py-1.5 pl-8 text-gray-900 placeholder-gray-600 sm:text-sm sm:leading-6'
              placeholder="Location"
            />
            <FiMapPin className='absolute mt-2.5 ml-2' />
          </div>
          <button type="submit" className='bg-specialtext text-black font-semibold py-2 px-8 md:rounded-s-none rounded'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Banner;