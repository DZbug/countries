import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryItem = ({ country }) => {
  const { population, region, capital, flag, name, numericCode } = country;

  return (
    <div className="country-item">
      <Link to={`/country/${numericCode}`}>
        <div className="card">
          <img className="card-img" src={flag} alt="" />
          <div className="card-content">
            <h3>{name}</h3>
            <p>
              <span className="country-description">Population:</span>{" "}
              {population}
            </p>
            <p>
              <span className="country-description">Region:</span> {region}
            </p>
            <p>
              <span className="country-description">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
