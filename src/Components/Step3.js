import { Input } from "antd";
import React from "react";

function Step2(props) {
  return (
    <div>
      <p>
        <Input
          addonBefore="Password"
          name="Password"
          value={props.getState("Password", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          addonBefore="ConfiromPassword"
          name="ConfiromPassword"
          value={props.getState("ConfiromPassword", "")}
          onChange={props.handleChange}
        />
      </p>
    </div>
  );
}

export default Step2;