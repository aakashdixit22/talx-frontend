import React from 'react';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { companyName, companyLogo, maxPrice, salaryType, jobLocation, employmentType, postingDate, description, jobTitle, minPrice } = data;

  return (
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt='company logo' height={100} width={100} />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h4 className='text-lg font-semibold'>{jobTitle}</h4>

          <div className='flex flex-col gap-2 mb-2 text-base '>
            <span className=' flex items-center gap-2'>
              <FiMapPin /> {jobLocation}
            </span>
            <span className=' flex items-center gap-2'>
              <FiClock /> {employmentType}
            </span>
            <span className=' flex gap-2 items-center'>
              <FiDollarSign /> {minPrice}-{maxPrice}
            </span>
            <span className='flex gap-2 items-center'>
              <FiCalendar /> {postingDate}
            </span>
          </div>
          <p className='text-base text-primary'>{description}</p>
        </div>
      </Link>
    </section>
  );
}

export default Card;
