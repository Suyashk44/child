import React from "react";

export default class ListOperations extends React.Component {
  
  handleButton (){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return <div>
      <h2>ListOperations</h2>
      <button onClick = {this.handleButton}>Click Here</button>
    </div>;
  }
}
