import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: 'Paul A.',
    title: 'Founder of XYZ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Cindy J.',
    title: 'Founder of XYZ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Danica W.',
    title: 'Founder of XYZ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Peter H.',
    title: 'Founder of XYZ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Andrea B.',
    title: 'Founder of XYZ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more testimonial objects here...
];

const TestimonialCard = ({ name, title, description, imageUrl }) => (
  <div className="bg-zinc-700 text-white rounded-lg p-6 m-4 flex items-center space-x-4 shadow-lg w-64">
    <img
      src={imageUrl}
      alt={name}
      className="w-16 h-16 rounded-full object-cover"
    />
    <div>
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm font-light">{title}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset >= 100 ? 0 : prevOffset + 0.5));
    }, 20);
    return () => clearInterval(intervalId);
  }, []);

  const rowVariants = (reverse = false) => ({
    animate: {
      x: reverse ? [-offset, 100] : [offset, -100],
      transition: {
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  });

  return (
    <div className="bg-zinc-900 py-12">
      <h2 className="text-4xl text-center text-white font-bold mb-10">Testimonials</h2>

      <div className="overflow-hidden space-y-6">
        {/* First Row (Right-moving) */}
        <motion.div
          className="flex space-x-4"
          variants={rowVariants(false)} // Moving right
          animate="animate"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>

        {/* Second Row (Left-moving) */}
        <motion.div
          className="flex space-x-4"
          variants={rowVariants(true)} // Moving left
          animate="animate"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>

        {/* Third Row (Right-moving) */}
        <motion.div
          className="flex space-x-4"
          variants={rowVariants(false)} // Moving right
          animate="animate"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
