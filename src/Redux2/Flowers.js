import React from "react";
import { store } from "./store";
import Rose from "./Rose.js";
import Lily from "./Lily.js";
// console.log(store.getState());
export default class Flowers extends React.Component {
  onClickDispatchAction = () => {
    const myAction = {
      type: "My_Action",
      payload: "Hello World!",
    };

    store.dispatch(myAction);
    console.log("Store : After dispatching onClickDispatchAction");
    console.log(store.getState());
  };
  onClickDispatchAction2 = () => {
    const myAction2 = {
      type: "My_Action2",
      payload: "How u doing!",
    };

    store.dispatch(myAction2);
    console.log("Store : After dispatching onClickDispatchAction2");
    console.log(store.getState());
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickDispatchAction}>
          Dispatch the action
        </button>
        <button onClick={this.onClickDispatchAction2}>
          Dispatch the action2
        </button>
        <Rose />
        <Lily />
      </div>
    );
  }
}
