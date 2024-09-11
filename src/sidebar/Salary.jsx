import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleClick, handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
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
          <span className="sidebar-label">All</span>
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="<30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="<50000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="<80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="<100000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
