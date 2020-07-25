import React from "react";

const CountryItem = () => {
  return (
    <div className="country-item">
      <div className="card">
        <h3>Germany</h3>
        <p>
          <span className="country-description">Population:</span> 81,770,900
        </p>
        <p>
          <span className="country-description">Region:</span> Europe
        </p>
        <p>
          <span className="country-description">Capital:</span> Berlin
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
