import React from "react";
import { store } from "./store";

console.log("Lily Store", store.getState());

export default class Lily extends React.Component {
  conClickLily = () => {
    console.log("Lily Store on click", store.getState());
  };

  render() {
    return (
      <div>
        Lily
        <button onClick={this.conClickLily}>Click to check Lily store</button>
      </div>
    );
  }
}
