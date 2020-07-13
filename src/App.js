
import React from "react";
import "./App.css";
>>>>>>> a60f5cd84b76a60cdc8fb20a32a5de6a1be86ad1

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    // this.handleIncr = this.handleIncr.bind(this)
    // this.handleDecre = this.handleDecre.bind(this)
    // this.handleReset = this.handleReset.bind(this)
};
// all three method changed using arrow function
handleIncr = () => { this.setState (function (prevState){
            return  {number : prevState.number + 1 };
           });
};
handleDecre = () =>  { this.setState (
         function (prevState){
           return  {number : prevState.number - 1 };
            });
};
handleReset = () =>  {this.setState (
        function (prevState){
          return  {number : 0};
           });
};

render () {
return (
    <div className = "Counter-Display">;
        <h1>Counter : {this.state.number}</h1>
        <button onClick = {this.handleIncr}>Increment</button>
        <button onClick = {this.handleReset}>Reset</button>
        <button onClick = {this.handleDecre}>Decrement</button>
    </div>
);
}

  render() {
    return (
      <div className="CounterDisplay">
        <h1>Counter : {this.state.number}</h1>
        <button onClick={this.handleIncr}>Increment</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleDecre}>Decrement</button>
      </div>
    );
  }
}

export default App;
