import React from "react";
import Tooltip from "./Tooltip";

export default function Temp() {
  return (
    <div className="App">
      <Tooltip value="Hello tooltip">
          <input type="text"/>
      </Tooltip>
      <br/>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
