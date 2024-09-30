import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"; // Import toaster and toast

const PostJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const email = localStorage.getItem("email");
  const {
    register,
    handleSubmit,
    formState: { errors }, // Use errors from formState
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Ensure the user has selected at least one skill
    if (!selectedOption || selectedOption.length === 0) {
      toast.error("Please select at least one skill.");
      return;
    }

    data.skills = selectedOption.map(option => option.value); // Store only the skill values
    data.postedBy = email;
    try {
      const response = await axios.post("http://localhost:5000/api/jobs/post-job", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response: ", response);
      if (response.data) {
        console.log("Job Posted Successfully: ", response.data)
        toast.success("Job posted successfully!");
        reset(); // Reset the form after successful submission
        setSelectedOption(null); // Reset the selected options
      }
    } catch (error) {
      toast.error("Error posting job: " + error.message); // Display error message
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
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Toaster */}
      <Toaster position="top-center" duration={4000} reverseOrder={false} />
      <h1 className="text-center p-4 text-2xl md:text-3xl font-bold">Post Jobs</h1>
      {/* form */}
      <div className="bg-[rgb(234,230,230)] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                {...register("jobTitle", { required: "Job Title is required." })}
                className="create-job-input"
              />
              {errors.jobTitle && (
                <span className="text-red-600">{errors.jobTitle.message}</span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                {...register("companyName", {
                  required: "Company Name is required.",
                })}
                className="create-job-input"
              />
              {errors.companyName && (
                <span className="text-red-600">{errors.companyName.message}</span>
              )}
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Minimum Salary</label>
              <input
                type="text"
                {...register("minPrice", {
                  required: "Minimum Salary is required.",
                })}
                className="create-job-input"
              />
              {errors.minPrice && (
                <span className="text-red-600">{errors.minPrice.message}</span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Maximum Salary</label>
              <input
                type="text"
                {...register("maxPrice", {
                  required: "Maximum Salary is required.",
                })}
                className="create-job-input"
              />
              {errors.maxPrice && (
                <span className="text-red-600">{errors.maxPrice.message}</span>
              )}
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Salary Type</label>
              <select
                {...register("salaryType", {
                  required: "Salary Type is required.",
                })}
                className="create-job-input"
              >
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.salaryType && (
                <span className="text-red-600">{errors.salaryType.message}</span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Job Location</label>
              <input
                type="text"
                {...register("jobLocation", {
                  required: "Job Location is required.",
                })}
                className="create-job-input"
              />
              {errors.jobLocation && (
                <span className="text-red-600">{errors.jobLocation.message}</span>
              )}
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Job Posting Date</label>
              <input
                type="date"
                {...register("postingDate", {
                  required: "Job Posting Date is required.",
                })}
                className="create-job-input"
              />
              {errors.postingDate && (
                <span className="text-red-600">{errors.postingDate.message}</span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Experience Level</label>
              <select
                {...register("experienceLevel", {
                  required: "Experience Level is required.",
                })}
                className="create-job-input"
              >
                <option value="">Choose your Experience</option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work Remotely</option>
              </select>
              {errors.experienceLevel && (
                <span className="text-red-600">
                  {errors.experienceLevel.message}
                </span>
              )}
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 text-[17px]">Required Skills</label>
            <CreatableSelect
              className="create-job-input"
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
            {selectedOption?.length === 0 && (
              <span className="text-red-600">At least one skill is required.</span>
            )}
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Company Logo</label>
              <input
                type="url"
                {...register("companyLogo", {
                  required: "Company Logo URL is required.",
                  pattern: {
                    value: /^https?:\/\/.*\.(?:png|jpg|jpeg|svg|gif)$/,
                    message: "Please enter a valid image URL.",
                  },
                })}
                className="create-job-input"
              />
              {errors.companyLogo && (
                <span className="text-red-600">{errors.companyLogo.message}</span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Employment Type</label>
              <select
                {...register("employmentType", {
                  required: "Employment Type is required.",
                })}
                className="create-job-input"
              >
                <option value="">Choose your Employment Type</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && (
                <span className="text-red-600">
                  {errors.employmentType.message}
                </span>
              )}
            </div>
          </div>

          {/* Job description */}
          <div className="w-full">
            <label className="block mb-2 text-[17px]">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5"
              {...register("description", {
                required: "Job Description is required.",
                minLength: {
                  value: 20,
                  message: "Description should be at least 20 characters long.",
                },
              })}
              rows={6}
              placeholder="Job Description"
            />
            {errors.description && (
              <span className="text-red-600">{errors.description.message}</span>
            )}
          </div>

          {/* Posted by */}
          {/* <div className="w-full">
            <label className="block mb-2 text-[17px]">Job Posted By</label>
            <input
              type="email"
              {...register("postedBy", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className="create-job-input"
            />
            {errors.postedBy && (
              <span className="text-red-600">{errors.postedBy.message}</span>
            )}
          </div> */}

          {/* Submit button */}
          <input
            type="submit"
            className="my-5 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
