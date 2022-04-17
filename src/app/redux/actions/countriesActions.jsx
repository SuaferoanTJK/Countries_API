import {
  CHANGE_MODE,
  OBTAIN_COUNTRIES,
  FILTER_COUNTRIES,
  INFO_COUNTRY,
  CLEAN_INFO_COUNTRY,
} from "../types/countriesTypes";
import getCountries from "./services/getCountries";

export const changeMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};

export const obtainCountries = (param, word) => {
  return async (dispatch) => {
    const countries = await getCountries(param, word);
    dispatch({
      type: OBTAIN_COUNTRIES,
      payload: countries,
    });
  };
};

export const filterCountry = (param, word) => {
  return async (dispatch) => {
    const countries = await getCountries(param, word);
    dispatch({
      type: FILTER_COUNTRIES,
      payload: countries,
    });
  };
};

export const obtainCountry = (payload) => {
  return {
    type: INFO_COUNTRY,
    payload,
  };
};

export const cleanCountry = () => {
  return {
    type: CLEAN_INFO_COUNTRY,
  };
};
