import {
  CHANGE_MODE,
  OBTAIN_COUNTRIES,
  FILTER_COUNTRIES,
  INFO_COUNTRY,
  CLEAN_INFO_COUNTRY,
} from "../types/countriesTypes";

const initialState = {
  darkMode: false,
  countries: [],
  filter: [],
  country: {},
};

export const countriesAPI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case OBTAIN_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case FILTER_COUNTRIES:
      return {
        ...state,
        filter: action.payload,
      };
    case INFO_COUNTRY:
      return {
        ...state,
        filter: [],
        country: action.payload,
      };
    case CLEAN_INFO_COUNTRY:
      return {
        ...state,
        country: {},
      };
    default:
      return state;
  }
};
