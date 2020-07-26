import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SEARCH_COUNTRIES,
  CLEAR_SEARCH_COUNTRIES,
  COUNTRY_ERROR,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FILTER_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        search: state.countries.filter((country) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return country.name.match(regex);
        }),
      };
    case CLEAR_SEARCH_COUNTRIES:
      return {
        ...state,
        search: null,
      };
    case COUNTRY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
