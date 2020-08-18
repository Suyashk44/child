import React from "react";

export default class ListOperations extends React.Component {
  state = {
    myListData: [],
    valueToSearch: "",
    orignalData: [],
    showNoRecordsMessage: false,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ myListData: data });
        this.setState({ orignalData: data });
      });
  }

  handleSubmit = () => {
    const { valueToSearch, orignalData } = this.state;
    const numberToSearch = parseInt(valueToSearch);
    const searchResult = orignalData.filter((u) => u.id === numberToSearch);
    const isSearchResultEmpty = searchResult.length === 0 ? true : false;
    this.setState({
      myListData: searchResult,
      showNoRecordsMessage: isSearchResultEmpty,
    });
  };

  onChangeSearch = (e) => {
    this.setState({ valueToSearch: e.target.value });
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
            onChange={this.onChangeSearch}
          />
          <button name="button" onClick={this.handleSubmit}>
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
          {this.state.showNoRecordsMessage && <div>No records found!</div>}
        </div>
      </div>
    );
  }
}
