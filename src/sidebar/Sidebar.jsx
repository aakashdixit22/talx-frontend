import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPostingData from './JobPostingData';
import WorkExperience from './WorkExperience';
import EmploymentType from './EmploymentType';

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Filters</h3>

      <div className="space-y-6">
        <Location handleChange={handleChange} handleClick={handleClick} />
        <Salary handleChange={handleChange} handleClick={handleClick} />
        <JobPostingData handleChange={handleChange} />
        <WorkExperience handleChange={handleChange} />
        <EmploymentType handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Sidebar;