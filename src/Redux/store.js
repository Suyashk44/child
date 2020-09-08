import { createStore } from "redux";

const initialState = {
  data: "",
  data2: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MY_ACTION":
      const newState = { ...state, ...{ data: action.payload } };
      return newState;

    case "YOUR_ACTION":
      const newState2 = { ...state, ...{ data2: action.payload } };
      return newState2;

    default:
      return state;
  }
};

export const store = createStore(reducer);
