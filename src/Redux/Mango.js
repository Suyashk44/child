import React from "react";

export default class Mango extends React.Component {
  render() {
    return <div className="border-blue">{this.props.nameFromApple}</div>;
  }
}
