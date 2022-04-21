import React, { useState } from "react";

const IconPropertyValue = (props) => {

  return (
    <div style={{ display: "flex", padding: "9px" }}>
      {props.icon}
      <p style={{ marginLeft: "10px" }}>{props.type} <span style={{fontWeight:"bold"}}>{props.value}</span></p>
    </div>
  );
};

export default IconPropertyValue;
