import { CHANGE_MODE, OBTAIN_ALL_COUNTRIES } from "../types/countriesTypes";
import getCountries from "./services/getCountries";

export const changeMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
export const obtainCountries = () => {
  return async (dispatch) => {
    const countries = await getCountries();
    dispatch({
      type: OBTAIN_ALL_COUNTRIES,
      payload: countries,
    });
  };
};
