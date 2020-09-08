import React from "react";
import { store } from "./store";

console.log("Apple store: ", store);

export default class Apple extends React.Component {
  onClickButton = () => {
    console.log("Apple store: ", store.getState());
  };

  render() {
    return (
      <div className="border-red">
        <button onClick={this.onClickButton}>Show store</button>
      </div>
    );
  }
}
