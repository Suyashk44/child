import React from "react";

function Mango(props) {
  return (
    <div className="border">
      <div>Mango also says:{props.input}</div>
    </div>
  );
}

export default Mango;
