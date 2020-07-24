import React from "react";
import CountryItem from "./CountryItem";

const Countries = () => {
  const countries = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryItem key={country} />
      ))}
    </div>
  );
};

export default Countries;
