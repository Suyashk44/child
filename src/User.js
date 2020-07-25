import React from "react";
import CustomButton from "./CustomButton";

function User(props) {
  return (
    <>
      <h1>Counter : {props.number}</h1>
      <CustomButton 
      buttonName = "Add"
      onClickHandler = {props.handleIncr}
      isDisabled = {props.number >= 50 ? true : false}
      />

      <CustomButton 
      buttonNae = "Reset"
      onClickHandler = {props.handleReset}
      />





      {/* <button
        disabled={props.number >= 50 ? true : false}
        onClick={props.handleIncr}
      >
        Add
      </button>

      <button onClick={props.handleReset}>Reset</button>

      <button
        disabled={props.number <= 0 ? true : false}
        onClick={props.handleDecre}
      >
  
      </button> */}
    </>
  );
}
export default User;
