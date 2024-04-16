import React from "react";
import InputField from "../Components/InputField";

const JobPostingData = ({ handleChange }) => {
  const nowDate = new Date();
  const twentyFourHoursAgo = new Date(nowDate - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(nowDate - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(nowDate - 30 * 24 * 60 * 60 * 1000);

  // Convert data to string
  const twentyFourHoursAgoData = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoData = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoData = thirtyDaysAgo.toISOString().slice(0, 10);


  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value={""}
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoData}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoData}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoData}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
