import React from "react";

export default class ListOperations extends React.Component {
  state = {
    myListData: [],
    valueToSearch: "",
    orignalData: [],
    showNoRecordsMessage: false,
    selectedRow: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ myListData: data });
        this.setState({ orignalData: data });
      });
  }

  onChangeSearch = (e) => {
    this.setState({ valueToSearch: e.target.value });
  };

  handleSubmit = () => {
    const { valueToSearch, orignalData } = this.state;
    const searchResult = orignalData.filter((u) => u.id === parseInt(valueToSearch));
    const isSearchResultEmpty = searchResult.length === 0 ? true : false;
    this.setState({
      myListData: searchResult,
      showNoRecordsMessage: isSearchResultEmpty,
    });
  };

  handleCheck = (rowToSelect, e) => {
    const { selectedRow } = this.state;
    if (e.target.checked === true) {
      selectedRow.push(rowToSelect);
      this.setState({ selectedRow: selectedRow });
    } else {
      const removeSelectedRow = selectedRow.filter((x) => x.id !== rowToSelect.id);
      this.setState({ selectedRow: removeSelectedRow });
    }
  };

  handleDelete = () => {
    const { myListData, selectedRow } = this.state;
    const dataToDelete = myListData.filter((mylist) => !selectedRow.includes(mylist));
    this.setState({ myListData: dataToDelete });
  };

  renderList = () => {
    const { myListData } = this.state;
    const list = myListData.map((x) => (
      <tr key={x.id}>
        <td>{x.id}</td>
        <td>{x.title}</td>
        <td>{x.body}</td>
        <td>
          <input
            type="checkbox"
            name="select"
            onClick={(e) => this.handleCheck(x, e)}
          />
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
          <br />
          <button onClick={() => this.handleDelete()}>Delete Selected</button>
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
