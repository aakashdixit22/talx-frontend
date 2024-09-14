import React from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";

const PostJob = () => {
  const[selectedOption,setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;
   // console.log(data);
   fetch("http://localhost:5000/post-job",{
    method:"POST",
    headers: {
      "content-Type": "application/json"},
      body: JSON.stringify(data),

   }).then((res) => res.json()).then((result) =>{
    console.log(result);
    }); //fetched it from frontend to backend by applying url of app.get(/jobs)
  };
  const options = [
    {value: 'JavaScript', label: 'JavaScript'},
    {value: 'C++', label: 'C++'},
    {value: 'HTML', label: 'HTML'},
    {value: 'CSS', label: 'CSS'},
    {value: 'React', label: 'React'},
    {value: 'Node', label: 'Node'},
    {value: 'MongoDB', label: 'MongoDB'},
    {value: 'Redux', label: 'Redux'},
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[rgb(234,230,230)] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex-Microsoft"
                
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Minimum Salary</label>
              <input
                type="text"
                
                placeholder="$20k"
                
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]  ">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
              <option value="">Choose your salary</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
              </select>

            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-10-28"
                
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
              <option value="">Choose your Experience</option>
              <option value="NoExperience">Hourly</option>
              <option value="Internship">Internship</option>
              <option value="Work remotely">Work Remotely</option>

              </select>

            </div>
            
          </div>
          {/* 5th row */}
          <div>
          <label className="block mb-2 text-[17px]">Required Skills</label>
          <CreatableSelect
            className="create-job-input"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
          />
          </div>
          {/* 6th row */}
          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Company Logo</label>
              <input
                type="url"
                placeholder="Paste Your logo URL :https://www.example.com/img1"
                
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-[17px]">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input">
              <option value="">Choose your Experience</option>
              <option value="Full-time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Temporary">Temporary</option>

              </select>

            </div>
            
          </div>
          {/*7th Row */}
          <div className="w-full">
          <label className="block mb-2 text-[17px]">Job Description</label>
          <textarea className="w-full pl-3 py-1.5"{...register("description")}
            rows={6} placeholder="Job Description" defaultValue={"Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."}
          />

          </div>
          {/*last row */}
          <div className="w-full">
          <label className="block mb-2 text-[17px]">Job Posted By</label>
          <input
                type="email"
                placeholder="your email"
                
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>




          <input type="submit" className="my-5 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"  />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
