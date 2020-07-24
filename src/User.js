import React from "react";

function User(props) {
  return (
    <>
      <h1>Counter : {props.data.number}</h1>
      <button
        disabled={props.data.number >= 50 ? true : false}
        onClick={props.handleIncr}
      >
        Add
      </button>

      <button onClick={props.handleReset}>Reset</button>

      <button
        disabled={props.data.number <= 0 ? true : false}
        onClick={props.handleDecre}
      >
        Decr
      </button>
    </>
  );
}
export default User;
