import React from "react";
import Apple from "./Apple.js";
import Mango from "./Mango.js";
export default class Fruits extends React.Component {
  state = {
    dataFromApple: "",
  };

  onChangedataFromApple = (val) => {
    this.setState({ dataFromApple: val });
  };
  render() {
    return (
      <div>
        <Apple onChangedataFromApple={this.onChangedataFromApple} />
        <Mango dataFromApple={this.state.dataFromApple} />
      </div>
    );
  }
}
