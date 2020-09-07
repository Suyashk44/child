import React from "react";

export default class Apple extends React.Component {
  state = {
    name: "",
  };

  onChangeInput = (e) => {
    this.setState({ name: e.target.value });
  };

  onClickButton = () => {
    this.props.onChangeNameFromApple(this.state.name);
  };

  render() {
    return (
      <div className="border-red">
        <input onChange={this.onChangeInput} />
        <button onClick={this.onClickButton}>Send data to Mango</button>
      </div>
    );
  }
}
