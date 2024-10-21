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
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt='company logo' height={100} width={100} />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h4 className='text-lg font-semibold'>{jobTitle}</h4>

          <div className='flex flex-col gap-2 mb-2 text-base'>
            <span className='flex items-center gap-2'>
              <FiMapPin /> {jobLocation}
            </span>
            <span className='flex items-center gap-2'>
              <FiClock /> {employmentType} - {experienceLevel} {/* Added experience level */}
            </span>
            <span className='flex gap-2 items-center'>
              <FiDollarSign /> {minPrice}-{maxPrice} {salaryType}
            </span>
            <span className='flex gap-2 items-center'>
              <FiCalendar /> {formatDate(postingDate.$date)} {/* Format date */}
            </span>
          </div>
          <p className='text-base text-primary'>{description}</p>

          {/* Skills section */}
          <div className="skills mt-2">
            <h5 className='font-semibold'>Required Skills:</h5>
            <ul className='list-disc ml-4'>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Apply Now button */}
          <button
            onClick={openModal}
            className="apply-button text-white bg-primary hover:bg-secondary py-2 px-4 rounded-md mt-4 inline-block"
          >
            Apply Now
          </button>
        </div>
      </Link>

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
