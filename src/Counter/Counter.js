import React from "react";
import User from "./User";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  handleIncr = () => {
    const { number } = this.state;
    if (number < 50) {
      this.setState({ number: number + 1 });
    }
  };

  handleDecre = () => {
    const { number } = this.state;
    if (number > 0) {
      this.setState({ number: number - 1 });
    }
  };

  handleReset = () => {
    this.setState({ number: 0 });
  };

  render() {
    return (
      <div className="Counter-Display" id="counter">
        <User
          handleIncr={this.handleIncr}
          handleDecre={this.handleDecre}
          handleReset={this.handleReset}
          number={this.state.number}
        />
      </div>
    );
  }
}
export default Counter;
