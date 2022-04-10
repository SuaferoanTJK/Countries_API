import { CHANGE_MODE, OBTAIN_COUNTRIES } from "../types/countriesTypes";

const initialState = {
  darkMode: false,
  countries: [],
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
    default:
      return state;
  }
};
