import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // Import toaster

const EditJobModal = ({ job, onClose, onSave }) => {
  const [selectedOption, setSelectedOption] = useState(
    job.skills.map((skill) => ({ value: skill.value, label: skill.label }))
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
      postingDate: job.postingDate || "",
      experienceLevel: job.experienceLevel || "",
      companyLogo: job.companyLogo || "",
      employmentType: job.employmentType || "",
      description: job.description || "",
      postedBy: job.postedBy || "",
    },
  });

  const onSubmit = async (data) => {
    data.skills = selectedOption.map((option) => ({
      value: option.value,
      label: option.label,
    }));
    try {
      await axios.put(`http://localhost:5000/edit-job/${job._id}`, data);
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
      
      {/* Add the Toaster component */}
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
        <div className="bg-white p-4 sm:p-6 rounded-md max-h-[90vh] overflow-y-auto w-full max-w-lg">
          <h2 className="text-2xl mb-4 font-semibold">Edit Job</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-lg">Job Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  {...register("jobTitle")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register("companyName")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  {...register("jobLocation")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Minimum Salary</label>
                <input
                  type="text"
                  placeholder="Minimum Salary"
                  {...register("minPrice")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Maximum Salary</label>
                <input
                  type="text"
                  placeholder="Maximum Salary"
                  {...register("maxPrice")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Salary Type</label>
                <select
                  {...register("salaryType")}
                  className="border p-2 w-full"
                >
                  <option value="">Choose your salary</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-lg">Posting Date</label>
                <input
                  type="date"
                  {...register("postingDate")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Experience Level</label>
                <select
                  {...register("experienceLevel")}
                  className="border p-2 w-full"
                >
                  <option value="">Choose Experience</option>
                  <option value="NoExperience">No Experience</option>
                  <option value="Internship">Internship</option>
                  <option value="Work remotely">Work Remotely</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-lg">Company Logo URL</label>
                <input
                  type="url"
                  placeholder="Company Logo URL"
                  {...register("companyLogo")}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Employment Type</label>
                <select
                  {...register("employmentType")}
                  className="border p-2 w-full"
                >
                  <option value="">Choose Employment Type</option>
                  <option value="Full-time">Full-Time</option>
                  <option value="Part-time">Part-Time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-lg">Job Description</label>
                <textarea
                  placeholder="Job Description"
                  {...register("description")}
                  rows="4"
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Posted By</label>
                <input
                  type="email"
                  placeholder="Posted By"
                  {...register("postedBy")}
                  className="border p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-lg">Required Skills</label>
                <CreatableSelect
                  className="border p-2 w-full"
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
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
