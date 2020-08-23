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

  handleSubmit = () => {
    const { valueToSearch, orignalData, showNoRecordsMessage } = this.state;
    const searchResult = orignalData.filter(
      (u) => u.id === parseInt(valueToSearch)
    );
    const isSearchResultEmpty = searchResult.length === 0 ? true : false;
    this.setState({
      myListData: searchResult,
      showNoRecordsMessage: isSearchResultEmpty,
    });
    console.log(isSearchResultEmpty);
  };

  onChangeSearch = (e) => {
    this.setState({ valueToSearch: e.target.value });
  };
  
  handleDelete = () => {
    const { myListData, selectedRow } = this.state;
    console.log(selectedRow);
    const dataToDelete = myListData.filter((mylist)=> !selectedRow.includes(mylist))
      this.setState({ myListData: dataToDelete });
  };

  handleCheck = (rowToSelect) => {
    // const listId=[1,2];
    // listId.push(rowToSelect);
    // console.log(listId);

    const { selectedRow } = this.state;
    selectedRow.push(rowToSelect);
    this.setState({ selectedRow: selectedRow });
    // console.log(selectedRow);
  };

  renderList = () => {
    const { myListData } = this.state;

    const list = myListData.map((x) => (
      <tr key={x.id}>
        <td>{x.id}</td>
        <td>{x.title}</td>
        <td>{x.body}</td>
        <td>
          {/* <button onClick={() => this.handleDelete(x)}>Delete</button> */}
          <input
            type="checkbox"
            name="select"
            onClick={() => this.handleCheck(x)}
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
