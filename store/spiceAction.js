//import * as FileSystem from 'expo-file-system'
import { insertSpice, fetchSpices } from "../helpers/db";

export const ADD_SPICE = "ADD_SPICE";
export const SET_SPICE = "SET_SPICE";

export const addSpice = (name, description, amount) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertSpice(name, description, amount);
      console.log(dbResult);
      dispatch({
        type: ADD_SPICE,
        spiceData: { name: name, description: description, amount: amount },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadSpices = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchSpices();
      dispatch({ type: SET_SPICE, userSpices: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
