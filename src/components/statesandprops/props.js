import React from "react";

function Childprops(props) {
  const { name, state, age } = props;
  return (
    <div>
      {state}
      {name}
      {age}
    </div>
  );
}

export default Childprops;
