import React from "react";
import Childprops from "../statesandprops/props";

function Parentprops() {
  return (
    <div>
      Parentprops
      <Childprops name="david" age="23" />
    </div>
  );
}

export default Parentprops;
