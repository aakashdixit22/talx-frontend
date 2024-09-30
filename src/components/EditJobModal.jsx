import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const EditJobModal = ({ job, onClose, onSave }) => {
  const [selectedOption, setSelectedOption] = useState(
    job.skills.map((skill) => ({ value: skill, label: skill })) // Adjust skills to be in value-label format
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
        : "", // Format date
      experienceLevel: job.experienceLevel || "",
      companyLogo: job.companyLogo || "",
      employmentType: job.employmentType || "",
      description: job.description || "",
      postedBy: job.postedBy || "",
    },
  });

  const onSubmit = async (data) => {
    // Send only skill values as an array of strings
    data.skills = selectedOption.map((option) => option.value);

    try {
      await axios.put(`http://localhost:5000/api/jobs/edit-job/${job._id}`, data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      toast.success("Job updated successfully!"); // Show success toast
      onSave();
      onClose();
    } catch (error) {
      toast.error("Error updating job"); // Show error toast
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
      <Toaster /> {/* Add Toaster component */}
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
        <div className="bg-white p-4 sm:p-6 rounded-md max-h-[90vh] overflow-y-auto w-full max-w-lg relative">
          {/* Flex container for heading and close button */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl mb-4 font-semibold">Edit Job</h2>
            <button
              className="text-gray-500 hover:text-red-500 focus:outline-none"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-lg">Job Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  {...register("jobTitle", { required: true })}
                  className="border p-2 w-full"
                />
                {errors.jobTitle && <p className="text-red-500">Job Title is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register("companyName", { required: true })}
                  className="border p-2 w-full"
                />
                {errors.companyName && <p className="text-red-500">Company Name is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  {...register("jobLocation", { required: true })}
                  className="border p-2 w-full"
                />
                {errors.jobLocation && <p className="text-red-500">Location is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Minimum Salary</label>
                <input
                  type="text"
                  placeholder="Minimum Salary"
                  {...register("minPrice", { required: true })}
                  className="border p-2 w-full"
                />
                {errors.minPrice && <p className="text-red-500">Minimum Salary is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Maximum Salary</label>
                <input
                  type="text"
                  placeholder="Maximum Salary"
                  {...register("maxPrice", { required: true })}
                  className="border p-2 w-full"
                />
                {errors.maxPrice && <p className="text-red-500">Maximum Salary is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Salary Type</label>
                <select
                  {...register("salaryType", { required: true })}
                  className="border p-2 w-full"
                >
                  <option value="">Choose your salary type</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
                {errors.salaryType && <p className="text-red-500">Salary Type is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Posting Date</label>
                <input
                  type="date"
                  {...register("postingDate", { required: false })}
                  className="border p-2 w-full"
                />
                {errors.postingDate && <p className="text-red-500">Posting Date is required</p>}
              </div>
              <div>
                <label className="block mb-2 text-lg">Experience Level</label>
                <select
                  {...register("experienceLevel", { required: false })}
                  className="border p-2 w-full"
                >
                  <option value="">Choose Experience</option>
                  <option value="NoExperience">No Experience</option>
                  <option value="Internship">Internship</option>
                  <option value="WorkRemotely">Work Remotely</option>
                </select>
                {/* {errors.experienceLevel && (
                  <p className="text-red-500">Experience Level is required</p>
                )} */}
              </div>
              <div>
                <label className="block mb-2 text-lg">Company Logo URL</label>
                <input
                  type="url"
                  placeholder="Company Logo URL"
                  {...register("companyLogo", { required: true })}
                  className="border p-2 w-full"
                />
                {errors.companyLogo && (
                  <p className="text-red-500">Company Logo URL is required</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-lg">Employment Type</label>
                <select
                  {...register("employmentType", { required: false })}
                  className="border p-2 w-full"
                >
                  <option value="">Choose Employment Type</option>
                  <option value="Full-time">Full-Time</option>
                  <option value="Part-time">Part-Time</option>
                  <option value="Temporary">Temporary</option>
                </select>
                {/* {errors.employmentType && (
                  <p className="text-red-500">Employment Type is required</p>
                )} */}
              </div>
              <div>
                <label className="block mb-2 text-lg">Job Description</label>
                <textarea
                  placeholder="Job Description"
                  {...register("description", { required: true })}
                  rows="4"
                  className="border p-2 w-full"
                />
                {errors.description && (
                  <p className="text-red-500">Job Description is required</p>
                )}
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg">Skills</label>
              <CreatableSelect
                isMulti
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Select or create skills"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 "
              >
                Save 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditJobModal;
