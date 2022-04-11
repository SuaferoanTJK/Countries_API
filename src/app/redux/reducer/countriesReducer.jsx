import {
  CHANGE_MODE,
  OBTAIN_COUNTRIES,
  OBTAIN_COUNTRY,
} from "../types/countriesTypes";

const initialState = {
  darkMode: false,
  countries: [],
  country: [],
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
    case OBTAIN_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};
