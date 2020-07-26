import React, { useReducer } from "react";
import axios from "axios";
import CountryContext from "./countryContext";
import CountryReducer from "./countryReducer";
import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  COUNTRY_ERROR,
  SET_LOADING,
} from "../types";

const CountryState = (props) => {
  const initialState = {
    countries: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // Get Countries
  const getCountries = async () => {
    try {
      setLoading();

      const res = await axios.get("https://restcountries.eu/rest/v2/all");

      // population
      // region
      // capital
      // flag
      // name
      // numericCode

      let data = [];

      data = res.data.map((country) => {
        for (let key in country) {
          if (
            key !== "population" &&
            key !== "region" &&
            key !== "capital" &&
            key !== "flag" &&
            key !== "name" &&
            key !== "numericCode"
          ) {
            delete country[key];
          }
        }

        return country;
      });

      dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: COUNTRY_ERROR,
        payload: err,
      });
    }
  };

  // Filter Countries
  const filterCountries = async (region) => {
    try {
      setLoading();

      const res = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`
      );

      // population
      // region
      // capital
      // flag
      // name
      // numericCode

      let data = [];

      data = res.data.map((country) => {
        for (let key in country) {
          if (
            key !== "population" &&
            key !== "region" &&
            key !== "capital" &&
            key !== "flag" &&
            key !== "name" &&
            key !== "numericCode"
          ) {
            delete country[key];
          }
        }

        return country;
      });

      dispatch({
        type: FILTER_COUNTRIES,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: COUNTRY_ERROR,
        payload: err,
      });
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        getCountries,
        filterCountries,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
