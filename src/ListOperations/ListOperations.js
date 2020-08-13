import React from "react";

export default class ListOperations extends React.Component {
  state = {
    myListData: [],
    button: false,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ myListData: data });
      });
  }

  handleSubmit = () => {
    this.setState({ button: true });
    console.log(this.state.button);
  };

  handleChange = (e) => {
    const { button } = this.state;
    if (button === true) {
      const { myListData } = this.state;
      const searchResult = myListData.filter((u) => 
    // button === true ? 
      u.id === e.target.value
      //:
      // "Result not found"
      );
      this.setState({ myListData: searchResult });
      console.log(searchResult);
    }
    
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
          <button
            name="button"
            // value={this.state.button}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
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
