import React from "react";

const CountryItem = () => {
  return (
    <div className="card country-item">
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
  );
};

export default CountryItem;
