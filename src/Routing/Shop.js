import React from "react";
import { Link } from "react-router-dom";

export default class Shop extends React.Component {
  state = {
    myData: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ myData: data });
      });
  }

  renderList = () => {
    const { myData } = this.state;
    console.log("myData is", myData);
    const list = myData.map((x) => (
      <ul key={x.id}>
        <Link to={`/shop/${x.id}`}>
          <li>{x.title}</li>
        </Link>
      </ul>
    ));
    return list;
  };

  render() {
    return (
      <div className="shopPage">
        <h1>{this.renderList()}</h1>
      </div>
    );
  }
}
