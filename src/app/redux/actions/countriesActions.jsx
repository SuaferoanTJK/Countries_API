import { CHANGE_MODE } from "../types/countriesTypes";

export const changeMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
