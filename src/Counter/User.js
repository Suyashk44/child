import React from "react";
import CustomButton from "../CustomButton";

function User(props) {
  return (
    <>
      <h1>Counter : {props.number}</h1>
      <CustomButton
        buttonName="Add"
        onClickHandler={props.handleIncr}
        isDisabled={props.number >= 50 ? true : false}
      />

      <CustomButton buttonName="Reset" onClickHandler={props.handleReset} />

      <CustomButton
        buttonName="Decre"
        onClickHandler={props.handleDecre}
        isDisabled={props.number <= 0 ? true : false}
      />
    </>
  );
}
export default User;
