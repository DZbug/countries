import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryContext from "../../context/country/countryContext";

const Country = ({ match }) => {
  const countryContext = useContext(CountryContext);

  const { getCountry, country, loading } = countryContext;

  useEffect(() => {
    getCountry(match.params.alpha3Code);

    // eslint-disable-next-line
  }, [match]);

  if (!loading && country !== null) {
    const {
      population,
      region,
      capital,
      flag,
      name,
      subregion,
      nativeName,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = country;

    return (
      <div className="container">
        <div className="back">
          <Link to={`/`} className="btn">
            <i className="fas fa-long-arrow-alt-left"></i> Back
          </Link>
        </div>

        <div className="country">
          <img src={flag} alt="" />
          <div className="country-info">
            <h2>{name}</h2>
            <div className="country-descriptions">
              <div className="part-1">
                <p>
                  <span className="country-description">Native Name:</span>{" "}
                  {nativeName}
                </p>
                <p>
                  <span className="country-description">Population:</span>{" "}
                  {population}
                </p>
                <p>
                  <span className="country-description">Region:</span> {region}
                </p>
                <p>
                  <span className="country-description">Sub Region:</span>{" "}
                  {subregion}
                </p>
                <p>
                  <span className="country-description">Capital:</span>{" "}
                  {capital}
                </p>
              </div>
              <div className="part-2">
                <p>
                  <span className="country-description">Top Level Domain:</span>{" "}
                  {topLevelDomain[0]}
                </p>
                <p>
                  <span className="country-description">Currencies:</span>{" "}
                  {currencies[0].name}
                </p>
                <p>
                  <span className="country-description">Languages:</span>{" "}
                  {languages
                    .map((lang) => {
                      return lang.name;
                    })
                    .join(", ")}
                </p>
              </div>
            </div>

            {borders.length !== 0 ? (
              <div className="border-countries">
                <p className="title">
                  <span className="country-description">Border Countries:</span>
                </p>
                <div className="border-countries-links">
                  {borders.map((border) => {
                    return (
                      <Link
                        to={`/country/${border.toLowerCase()}`}
                        key={border}
                        className="btn-country"
                      >
                        {border}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Country;
