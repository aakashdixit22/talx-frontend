import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Type of Emploment</h4>

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
          value="temporary"
          title="Temporary"
          name="text"
        />
        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="text"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="text"
        />
       
      </div>
    </div>
  )
}

export default EmploymentType