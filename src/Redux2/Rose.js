import React from "react";
import { store } from "./store";

console.log("Rose Store", store.getState());

export default class Rose extends React.Component {
  conClickRose = () => {
    console.log("Rose Store on click", store.getState());
  };

  render() {
    return (
      <div>
        Rose
        <button onClick={this.conClickRose}>Click to check Rose store</button>
      </div>
    );
  }
}
