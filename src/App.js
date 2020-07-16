import React from "react";
import "./App.css";

class App extends React.Component {
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
    if (this.state.number > 0) {
      this.setState(function (prevState) {
        return { number: prevState.number - 1 };
      });
    }
  };

  handleReset = () => {
    this.setState(function (prevState) {
      return { number: 0 };
    });
  };

  render() {
    return (
      <div className="Counter-Display">
        <h1>Counter : {this.state.number}</h1>
        <button onClick={this.handleIncr}>Add</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleDecre}>Decr</button>
      </div>
    );
  }
}

export default App;
