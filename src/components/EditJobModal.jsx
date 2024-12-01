

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { X } from "lucide-react";

const EditJobModal = ({ job, onClose, onSave }) => {
  const [selectedOption, setSelectedOption] = useState(
    job.skills.map((skill) => ({ value: skill, label: skill }))
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobTitle: job.jobTitle || "",
      companyName: job.companyName || "",
      jobLocation: job.jobLocation || "",
      minPrice: job.minPrice || "",
      maxPrice: job.maxPrice || "",
      salaryType: job.salaryType || "",
      postingDate: job.postingDate
        ? new Date(job.postingDate).toISOString().split("T")[0]
        : "",
      experienceLevel: job.experienceLevel || "",
      companyLogo: job.companyLogo || "",
      employmentType: job.employmentType || "",
      description: job.description || "",
      postedBy: job.postedBy || "",
    },
  });

  const onSubmit = async (data) => {
    data.skills = selectedOption.map((option) => option.value);

    try {
      await axios.put(`https://job-portal-backend-nm6k.onrender.com/api/jobs/edit-job/${job._id}`, data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      toast.success("Job updated successfully!");
      onSave();
      onClose();
    } catch (error) {
      toast.error("Error updating job");
      console.error("Error updating job:", error);
    }
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <>
      <Toaster />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight">Edit Job Listing</h2>
            <button 
              onClick={onClose} 
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Form Container */}
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="p-6 space-y-6 max-h-[75vh] overflow-y-auto"
          >
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Enter job title"
                  {...register("jobTitle", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm mt-1">Job Title is required</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  {...register("companyName", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">Company Name is required</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Job location"
                  {...register("jobLocation", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.jobLocation && (
                  <p className="text-red-500 text-sm mt-1">Location is required</p>
                )}
              </div>

              {/* Minimum Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Salary
                </label>
                <input
                  type="text"
                  placeholder="Minimum Salary"
                  {...register("minPrice", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.minPrice && (
                  <p className="text-red-500 text-sm mt-1">Minimum Salary is required</p>
                )}
              </div>

              {/* Maximum Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Salary
                </label>
                <input
                  type="text"
                  placeholder="Maximum Salary"
                  {...register("maxPrice", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.maxPrice && (
                  <p className="text-red-500 text-sm mt-1">Maximum Salary is required</p>
                )}
              </div>

              {/* Salary Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Type
                </label>
                <select
                  {...register("salaryType", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                >
                  <option value="">Choose your salary type</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
                {errors.salaryType && (
                  <p className="text-red-500 text-sm mt-1">Salary Type is required</p>
                )}
              </div>

              {/* Posting Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Posting Date
                </label>
                <input
                  type="date"
                  {...register("postingDate", { required: false })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.postingDate && (
                  <p className="text-red-500 text-sm mt-1">Posting Date is required</p>
                )}
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  {...register("experienceLevel", { required: false })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                >
                  <option value="">Choose Experience</option>
                  <option value="NoExperience">No Experience</option>
                  <option value="Internship">Internship</option>
                  <option value="WorkRemotely">Work Remotely</option>
                </select>
              </div>

              {/* Company Logo URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Logo URL
                </label>
                <input
                  type="url"
                  placeholder="Company Logo URL"
                  {...register("companyLogo", { required: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                />
                {errors.companyLogo && (
                  <p className="text-red-500 text-sm mt-1">Company Logo URL is required</p>
                )}
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <select
                  {...register("employmentType", { required: false })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
                >
                  <option value="">Choose Employment Type</option>
                  <option value="Full-time">Full-Time</option>
                  <option value="Part-time">Part-Time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description
              </label>
              <textarea
                placeholder="Job Description"
                {...register("description", { required: true })}
                rows="6"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">Job Description is required</p>
              )}
            </div>

            {/* Skills Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills
              </label>
              <CreatableSelect
                isMulti
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Select or create skills"
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditJobModal;