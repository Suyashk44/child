import React from "react";
import Apple from "./Apple";
import Mango from "./Mango";

export default class Fruits extends React.Component {
  state = {
    nameFromApple: "",
  };

  onChangeNameFromApple = (val) => {
    this.setState({ nameFromApple: val });
  };

  render() {
    return (
      <div>
        <Apple onChangeNameFromApple={this.onChangeNameFromApple} />
        <Mango nameFromApple={this.state.nameFromApple} />
      </div>
    );
  }
}
