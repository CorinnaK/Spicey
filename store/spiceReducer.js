import { SPICES } from "../data/spicey_json";
import Spice from "../models/Spice";
import { SET_SPICES, ADD_SPICE } from "./spiceAction";

const initialState = {
  masterSpices: SPICES,
  userSpices: [],
};

const spiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPICES:
      return {
        // masterSpices: action.masterSpices,
        userSpices: action.userSpices,
      };
    case ADD_SPICE:
      const newSpice = new Spice(
        action.userSpices.id.toSring(),
        action.userSpices.name,
        action.userSpices.description
      );
      return { userSpices: state.userSpices.concat(newSpice) };

    default:
      return state;
  }
};

export default spiceReducer;
