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

<<<<<<< HEAD:src/User.js
      <CustomButton 
      buttonName="Reset" 
      onClickHandler = {props.handleReset}
      isDisabled={props.number != 0 ? false : true}
      />
      
      <CustomButton 
      buttonName ="Decre"
      onClickHandler={props.handleDecre}
      isDisabled={props.number <= 0 ? true : false}
      />
=======
      <CustomButton buttonName="Reset" onClickHandler={props.handleReset} />
>>>>>>> 9031f5a18cc0a563e295045de2fc53c3ce42c8e5:src/Counter/User.js

      <CustomButton
        buttonName="Decre"
        onClickHandler={props.handleDecre}
        isDisabled={props.number <= 0 ? true : false}
      />
    </>
  );
}
export default User;
