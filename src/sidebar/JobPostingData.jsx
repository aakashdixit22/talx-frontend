import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const SevenDayAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const ThirtyDayAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  // convert date to string
  const twentyFourHoursAgoString = twentyFourHoursAgo
    .toISOString()
    .slice(0, 10);
  const SevenDayAgoString = SevenDayAgo.toISOString().slice(0, 10);
  const ThirtyDayAgoString = ThirtyDayAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Date of Posting</h4>

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
          <span className="sidebar-label">All Time</span>
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoString}
          title="Last 24 hours"
          name="text"
        />
        <InputField
          handleChange={handleChange}
          value={SevenDayAgoString}
          title="Last 7 days"   
          name="text"
        />
        <InputField
          handleChange={handleChange}
          value={ThirtyDayAgoString}
          title="Last Month"
          name="text"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
