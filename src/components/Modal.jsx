import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is being used for API requests

const JobApplicationModal = ({ job, onClose }) => {
  const { _id, jobTitle, companyName } = job; // Extracting job information from props

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null, // File upload for resume
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input for resume
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Create form data for file upload
    const applicationData = new FormData();
    applicationData.append('name', formData.name);
    applicationData.append('email', formData.email);
    applicationData.append('phone', formData.phone);
    applicationData.append('resume', formData.resume); // Append resume file

    try {
      // Make a POST request to apply route
      const response = await axios.post(`http://localhost:5000/api/jobApply/apply/${_id}`, applicationData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', resume: null }); // Reset form
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
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-6 rounded-lg w-full max-w-md relative">
        <h2 className="text-lg font-bold mb-4">Apply for {jobTitle} at {companyName}</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">Application submitted successfully!</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume" className="block text-sm font-medium">
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              required
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>

        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default JobApplicationModal;
