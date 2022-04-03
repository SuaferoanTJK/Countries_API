import { CHANGE_MODE } from "../types/countriesTypes";

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
    default:
      return state;
  }
};
