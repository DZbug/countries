import React, { useContext, useEffect } from "react";
import CountryItem from "./CountryItem";
import CountryContext from "../../context/country/countryContext";

const Countries = () => {
  const countryContext = useContext(CountryContext);

  const { countries, loading, getCountries } = countryContext;

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="country-list">
      {countries !== null && !loading
        ? countries.map((country) => (
            <CountryItem key={country.numericCode} country={country} />
          ))
        : ""}
    </div>
  );
};

export default Countries;
