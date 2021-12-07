import React from "react";
import { Input } from "antd";

function Step1(props) {
  return (
    <div className='d-flex text-center g-2'>
        <div>
        <p>
        <Input  className='m-2'
          addonBefore="First Name"
          name="name"
          value={props.getState("name", "")}
          onChange={props.handleChange}
        />
      </p>
      <br/>
      <p>
        <Input className='m-2 p-2'
          addonBefore="Last Name"
          name="surname"
          value={props.getState("surname", "")}
          onChange={props.handleChange}
        />
      </p>
        </div>
    
    </div>
  );
}

export default Step1;