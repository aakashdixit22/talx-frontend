import React, { useState } from 'react';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import JobApplicationModal from './Modal'; // Ensure the import path is correct

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    companyLogo,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    experienceLevel, // New field
    description,
    jobTitle,
    minPrice,
    skills, // New field
  } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Convert MongoDB date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  return (
    <section className='bg-white p-6 rounded-lg shadow-lg mb-6'>
      <div className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt='company logo' className='w-24 h-24 object-cover rounded-md' />
        <div className='flex-1'>
          <h4 className='text-primary mb-1 text-xl font-bold'>{companyName}</h4>
          <h4 className='text-2xl font-semibold mb-2'>{jobTitle}</h4>

          <div className='flex flex-col gap-2 mb-4 text-gray-700'>
            <span className='flex items-center gap-2'>
              <FiMapPin className='text-gray-500' /> {jobLocation}
            </span>
            <span className='flex items-center gap-2'>
              <FiClock className='text-gray-500' /> {employmentType} - {experienceLevel} {/* Added experience level */}
            </span>
            <span className='flex gap-2 items-center'>
              <FiDollarSign className='text-gray-500' /> {minPrice}-{maxPrice} {salaryType}
            </span>
            <span className='flex gap-2 items-center'>
              <FiCalendar className='text-gray-500' /> {formatDate(postingDate.$date)} {/* Format date */}
            </span>
          </div>
          <p className='text-base text-gray-800 mb-4'>{description}</p>

          {/* Skills section */}
          <div className="skills mb-4">
            <h5 className='font-semibold text-lg mb-2'>Required Skills:</h5>
            <ul className='list-disc ml-4 text-gray-700'>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Apply Now button */}
          <button
            onClick={openModal}
            className="text-black font-bold bg-specialtext hover:bg-yellow-500  py-2 px-4 rounded-md mt-4 inline-block transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Job Application Modal */}
      {isModalOpen && (
        <JobApplicationModal
          job={data} 
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Card;