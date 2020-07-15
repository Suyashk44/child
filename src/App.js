import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  };
//////////////////////////////////////////using For loop here////////////////////////////////////////////////////////////////////////
  handleIncr = () => {
    this.setState(function (prevState) {
      for (this.state.number = 0; this.state.number <= 50; this.state.number++) {
        return { number: prevState.number + 1 };
      };
    });
  };

  /////////////////////////////////////////////////using if else condition////////////////////////////////////////////////////
// handleIncr = () => {
//   if (this.state.number <= 50){
//     alert ("You have reached to the max no")
//     this.setState(function () {return{number: 0}});
//   }else {
//     this.setState(function (prevState) {return {number:prevState.number+1}});
//   };
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  handleDecre = () => {
    this.setState(function (prevState) {return { number: prevState.number - 1 };});
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
  };
};

export default App;
