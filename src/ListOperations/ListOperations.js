import React from "react";

export default class ListOperations extends React.Component {
  state = {
    myListData: [],
    id: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ myListData: data });
      });
  }
  //--------1.--------- stored input element---------------------
  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  //   console.log(this.state.id);

  //   const {myListData} = this.state;
  //   const searchResult = myListData.filter((u)=>u.id === this.state.id);
  //   this.setState({myListData : searchResult});
  //   console.log(searchResult);
  // };

  //-------2.---------find()method
  handleChange = (e) => {
    // e is the event object of input element
    const { myListData } = this.state;
    const input = document.getElementById("input"); // not needed
    const searchResult = myListData.filter((u) => u.id == e.target.value);
    this.setState({ myListData: searchResult });
    console.log(searchResult);
  };

  handleDelete = (rowToDelete) => {
    const { myListData } = this.state;
    let newData = myListData.filter((x) => x.id !== rowToDelete.id);
    this.setState({ myListData: newData });
  };

  renderList = () => {
    const { myListData } = this.state;

    const list = myListData.map((x) => (
      <tr key={x.id}>
        <td>{x.id}</td>
        <td>{x.title}</td>
        <td>{x.body}</td>
        <td>
          <button onClick={() => this.handleDelete(x)}>Delete</button>
        </td>
      </tr>
    ));

    return list;
  };

  render() {
    return (
      <div>
        <h2>ListOperations</h2>

        <div>
          <input
            placeholder="Enter id here"
            type="number"
            name="id"
            id="input"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
