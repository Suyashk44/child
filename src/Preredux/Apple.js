import React from "react";
import Mango from "./Mango.js";

export default class Apple extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    const { input } = this.state;
    this.setState({ input: e.target.value });
    console.log(input);
  };

  render() {
    return (
      <div className="border">
        <input
          type="text"
          placeholder="Enter text here"
          onChange={this.handleChange}
        />
        <div>Apple says:{this.state.input}</div>

        <Mango input={this.state.input} />
      </div>
    );
  }
}
