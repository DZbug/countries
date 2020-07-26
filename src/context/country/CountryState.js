import React, { useReducer } from "react";
import axios from "axios";
import CountryContext from "./countryContext";
import CountryReducer from "./countryReducer";
import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SEARCH_COUNTRIES,
  CLEAR_SEARCH_COUNTRIES,
  GET_COUNTRY,
  COUNTRY_ERROR,
  SET_LOADING,
} from "../types";

const CountryState = (props) => {
  const initialState = {
    countries: null,
    search: null,
    country: null,
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
      // alpha3Code

      let data = [];

      data = res.data.map((country) => {
        for (let key in country) {
          if (
            key !== "population" &&
            key !== "region" &&
            key !== "capital" &&
            key !== "flag" &&
            key !== "name" &&
            key !== "numericCode" &&
            key !== "alpha3Code"
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
      // alpha3Code

      let data = [];

      data = res.data.map((country) => {
        for (let key in country) {
          if (
            key !== "population" &&
            key !== "region" &&
            key !== "capital" &&
            key !== "flag" &&
            key !== "name" &&
            key !== "numericCode" &&
            key !== "alpha3Code"
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

  // Search Countries
  const searchCountries = (text) => {
    dispatch({
      type: SEARCH_COUNTRIES,
      payload: text,
    });
  };

  // Clear Search Countries
  const clearSearchCountries = () => dispatch({ type: CLEAR_SEARCH_COUNTRIES });

  // Get Country
  const getCountry = async (alpha3Code) => {
    try {
      setLoading();

      const res = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
      );

      dispatch({
        type: GET_COUNTRY,
        payload: res.data,
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
        search: state.search,
        country: state.country,
        loading: state.loading,
        getCountries,
        filterCountries,
        searchCountries,
        clearSearchCountries,
        getCountry,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
