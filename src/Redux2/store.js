import { createStore } from "redux";

const initialData = {
  data1: "ppp",
  data2: "QQQ",
};
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "my_Action":
      const newState = { ...state, ...{ data1: action.payload } };
      return newState;

    case "my_Action2":
      const newState2 = { ...state, ...{ data2: action.payload } };
      return newState2;

    default:
      return state;
  }
};
export const store = createStore(reducer);
console.log("store created : ");
console.log(store.getState());
