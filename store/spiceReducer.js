import { SPICES } from "../data/spicey_json";

const initialState = {
  masterSpices: SPICES,
  userSpices: SPICES,
};

const spiceReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_SPICES:
    //   return {
    //     masterSpices: action.masterSpices,
    //     userSpices: action.userSpices,
    //   };
    default:
      return state;
  }
};

export default spiceReducer;
