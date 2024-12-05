import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationModal = ({ job, onClose }) => {
  const {
    _id,
    jobTitle,
    companyName,
    companyLogo,
    maxPrice,
    minPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    experienceLevel,
    description,
    skills,
  } = job;

  const storedEmail = localStorage.getItem('userEmail') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: storedEmail,
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);
    
        const applicationData = new FormData();
        applicationData.append('name', formData.name);
        applicationData.append('email', localStorage.getItem("email"));
        applicationData.append('phone', formData.phone);
        applicationData.append('resume', formData.resume);
        applicationData.append('coverLetter', formData.coverLetter);
    
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/jobApply/apply/${_id}`, applicationData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
    
          if (response.status === 200) {
            setSuccess(true);
            setFormData({ name: '', email: storedEmail, phone: '', resume: null, coverLetter: '' });
          } else {
            setError('Failed to apply. Please try again.');
          }
        } catch (err) {
          console.error(err);
          setError('An error occurred while applying. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 lg:mx-0 rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 space-y-6 max-h-[90vh] overflow-y-auto">
          {/* Job Details Section */}
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {companyLogo && (
                <img
                  src={companyLogo}
                  alt={companyName}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                />
              )}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{jobTitle}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{companyName}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <p><strong>Location:</strong> {jobLocation}</p>
              <p><strong>Type:</strong> {employmentType}</p>
              <p><strong>Experience:</strong> {experienceLevel}</p>
              <p><strong>Posted on:</strong> {new Date(postingDate).toLocaleDateString()}</p>
              <p>
                <strong>Salary:</strong> {minPrice} - {maxPrice} {salaryType}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Description:</strong> {description}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Skills:</strong> {skills.join(', ')}
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                Application submitted successfully!
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload Resume (PDF)
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-blue-100 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                id="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Write your cover letter here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;
