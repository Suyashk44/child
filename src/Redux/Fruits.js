import React from "react";
import { store } from "./store";
import Apple from "./Apple";
console.log(store.getState());

export default class Fruits extends React.Component {
  onClickDispatchAction = () => {
    const myAction = {
      type: "MY_ACTION",
      payload: "hello world",
    };

    store.dispatch(myAction);

    console.log("After dispatching onClickDispatchAction");
    console.log(store.getState().data2);
  };

  onClickDispatchAction2 = () => {
    const myAction2 = {
      type: "YOUR_ACTION",
      payload: "werwerwerwerew",
    };

    store.dispatch(myAction2);

    console.log("After dispatching onClickDispatchAction2");
    console.log(store.getState());
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickDispatchAction}>Dispatch action</button>
        <button onClick={this.onClickDispatchAction2}>Dispatch action 2</button>
        <Apple />
      </div>
    );
  }
}
