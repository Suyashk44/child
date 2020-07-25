import React from "react"

function CustomButton (props) {
  return (
    <button disabled = {props.isDisabled} onClick = {props.onClickHandler}>
      {props.buttonNmae}
    </button>
  )
}

export default CustomButton