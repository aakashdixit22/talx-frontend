import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import PostJobBg from "../assets/postjobbg.jpg";
import { ClipLoader } from "react-spinners";

const PostJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const email = localStorage.getItem("email");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    if (!selectedOption || selectedOption.length === 0) {
      toast.error("Please select at least one skill.");
      return;
    }

    data.skills = selectedOption.map(option => option.value);
    data.postedBy = email;
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/jobs/post-job`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response: ", response);
      if (response.data) {
        console.log("Job Posted Successfully: ", response.data)
        toast.success("Job posted successfully!");
        setLoading(false);
        reset();
        setSelectedOption(null);
      }
    } catch (error) {
      toast.error("Error posting job: " + error.message);
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
    <div className="bg-navy min-h-screen">
    <div className="max-w-4xl  mx-auto px-4 py-8">
      <Toaster position="top-center" duration={4000} reverseOrder={false} />
      
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-navy text-black text-center py-10"
        style={{
          backgroundImage: `url(${PostJobBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <h1 className="text-3xl font-bold tracking-wide">Post a New Job</h1>
          <p className="text-sm text-black/80 mt-2">Share your job opportunity with top talent</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          {/* Job Title & Company Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                {...register("jobTitle", { required: "Job Title is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {errors.jobTitle && (
                <span className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                {...register("companyName", { required: "Company Name is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {errors.companyName && (
                <span className="text-red-500 text-sm mt-1">{errors.companyName.message}</span>
              )}
            </div>
          </div>

          {/* Salary Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Salary</label>
              <input
                type="text"
                {...register("minPrice", { required: "Minimum Salary is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {errors.minPrice && (
                <span className="text-red-500 text-sm mt-1">{errors.minPrice.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Salary</label>
              <input
                type="text"
                {...register("maxPrice", { required: "Maximum Salary is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {errors.maxPrice && (
                <span className="text-red-500 text-sm mt-1">{errors.maxPrice.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Type</label>
              <select
                {...register("salaryType", { required: "Salary Type is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="">Select Salary Type</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.salaryType && (
                <span className="text-red-500 text-sm mt-1">{errors.salaryType.message}</span>
              )}
            </div>
          </div>

          {/* Job Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Location</label>
              <input
                type="text"
                {...register("jobLocation", { required: "Job Location is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {errors.jobLocation && (
                <span className="text-red-500 text-sm mt-1">{errors.jobLocation.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Posting Date</label>
              <input
                type="date"
                {...register("postingDate", { required: "Job Posting Date is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {errors.postingDate && (
                <span className="text-red-500 text-sm mt-1">{errors.postingDate.message}</span>
              )}
            </div>
          </div>

          {/* Experience & Employment Type */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
              <select
                {...register("experienceLevel", { required: "Experience Level is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="">Select Experience</option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work Remotely</option>
              </select>
              {errors.experienceLevel && (
                <span className="text-red-500 text-sm mt-1">{errors.experienceLevel.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
              <select
                {...register("employmentType", { required: "Employment Type is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && (
                <span className="text-red-500 text-sm mt-1">{errors.employmentType.message}</span>
              )}
            </div>
          </div>

          {/* Required Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills</label>
            <CreatableSelect
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: '0.5rem',
                  borderColor: '#D1D5DB',
                  '&:hover': { borderColor: '#3B82F6' }
                })
              }}
            />
            {selectedOption?.length === 0 && (
              <span className="text-red-500 text-sm mt-1">At least one skill is required.</span>
            )}
          </div>

          {/* Company Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo URL</label>
            <input
              type="url"
              {...register("companyLogo", {
                required: "Company Logo URL is required.",
                pattern: {
                  value: /^https?:\/\/.*\.(?:png|jpg|jpeg|svg|gif)$/,
                  message: "Please enter a valid image URL.",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            {errors.companyLogo && (
              <span className="text-red-500 text-sm mt-1">{errors.companyLogo.message}</span>
            )}
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
            <textarea
              {...register("description", {
                required: "Job Description is required.",
                minLength: {
                  value: 20,
                  message: "Description should be at least 20 characters long.",
                },
              })}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Provide a detailed job description..."
            />
            {errors.description && (
              <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-specialtext hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded-lg "
            >
            {loading ? (
              <ClipLoader size={20} color={"#fff"} loading={loading} />
            ) : (
              "Post Job")

            }

            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PostJob;