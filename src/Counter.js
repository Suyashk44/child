import React from "react";
import CustomButton from "./CustomButton";
import User from "./User";


class Counter extends React.Component {
  constructor () {
    super () 
    this.state = {
      number : 0,
    }
  }

  render () {
    return (
      <div className = "Counter-Display" id = "counter">
        <User 
        handleIncr={this.handleIncr}
        handleDecre={this.handleDecre}
        handleReset={this.handleReset}
        number={this.state.number}
        />

      </div>
    )
  }
}
export default Counter;


