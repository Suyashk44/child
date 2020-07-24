import React from "react";
import User from "./User";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 49,
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
          handleIncr = {this.handleIncr}
          handleDecre = {this.handleDecre}
          handleReset = {this.handleReset}
          data = {this.state}
          />
      </div>
    );
  }
}

export default Counter;
