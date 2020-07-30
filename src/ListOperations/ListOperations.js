import React from "react";
const temp = [
  {
    id: 1,
    title: "onesdfsdf",
  },
  {
    id: 333,
    title: "twowwwww",
  },
  {
    id: 3,
    title: "thre123123e",
  },
];

export default class ListOperations extends React.Component {
  state = {
    myListData: [],
  };

  handleButton = () => {
    // this.setState({ myListData: temp });
    // console.log("temp Before: ", temp);
    // const a = temp.map((x) => x.id);

    // console.log("temp After: ", temp);
    // console.log("a after: ", a);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ myListData: data });
      });
  };

  renderList = () => {
    const { myListData } = this.state;

    const list = myListData.map((x) => (
      <tr>
        <td>{x.id}</td>
        <td>{x.title}</td>
      </tr>
    ));

    console.log("list: ", list);

    return list;

    // return (
    //   <>
    //     <tr>
    //       <td>1</td>
    //       <td>sldj</td>
    //     </tr>
    //     <tr>
    //       <td>2</td>
    //       <td>sldj</td>
    //     </tr>
    //     <tr>
    //       <td>3</td>
    //       <td>sldj</td>
    //     </tr>
    //     <tr>
    //       <td>4</td>
    //       <td>sldj</td>
    //     </tr>
    //   </>
    // );
  };

  render() {
    return (
      <div>
        <h2>ListOperations</h2>
        <button onClick={this.handleButton}>Click Here</button>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

// 1. array
// 2. map and forEach
// 3. functions, a) functions that do NOT return any value
//               b) functions that DO return value
