import React from "react";
import User from "./User";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 49,
    };
  }

  handleIncr = (props) => {
    const { number } = this.state;
    if (number < 50) {
      this.setState({ number: number + 1 });
    }
  };

  handleDecre = (props) => {
    const { number } = this.state;
    if (number > 0) {
      this.setState({ number: number - 1 });
    }
  };

  handleReset = (props) => {
    this.setState({ number: 0 });
  };
  render() {
    return (
      <div>
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

export default CustomButton;
