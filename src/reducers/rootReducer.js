import initialState, { commonConstants } from "../constants/constants.js";

const rootReducer = (state = initialState.rootReducer, action) => {
  const newState = { ...state };
  switch (action.type) {
    default: {
    }
  }
  return newState;
};

export default rootReducer;
