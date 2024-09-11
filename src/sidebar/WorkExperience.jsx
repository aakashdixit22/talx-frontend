import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Work Experience</h4>

      <div>
        <label className="flex sidebar-label-container">
          <span className="checkmark"></span>
          <input
            type="radio"
            name="text"
            id="text"
            value=""
            onChange={handleChange}
          />
          <span className="sidebar-label">Any Experience</span>
        </label>

        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="text"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="text"
        />
       
      </div>
    </div>
  );
};

export default WorkExperience;
