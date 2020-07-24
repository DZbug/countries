import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <select name="filter">
        <option defaultValue="">Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
      </select>
    </div>
  );
};

export default Filter;
