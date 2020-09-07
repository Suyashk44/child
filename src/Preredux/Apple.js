import React from "react";
import Mango from "./Mango.js";

export default class Apple extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    const { input } = this.state;
    this.setState({ input: e.target.value });
  };

  handleButton = () => {
    this.props.onChangedataFromApple(this.state.input);
  };

  render() {
    return (
      <div className="border-red">
        <input
          type="text"
          placeholder="Enter text here"
          onChange={this.handleChange}
        />
        <button onClick={this.handleButton}>Send to Mango</button>
      </div>
    );
  }
}
