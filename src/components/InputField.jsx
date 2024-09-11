import React from "react";

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="flex sidebar-label-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className="checkmark"></span>
      <span className="sidebar-label">{title}</span>
    </label>
  );
};

export default InputField;
