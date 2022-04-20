import React, { useState } from "react";

const IconPropertyValue = (props) => {
  //si el estado es en linea, el texto de la propieadad se pone a continuacion de ella
  const [inline, setInline] = useState(true);

  {
    inline ? (
      <div style={{ display: "flex", padding: "5px" }}>
        {props.icon}
        <p style={{ marginLeft: "10px" }}>{props.type} 68% </p>
      </div>
    ) : (
      <div style={{ display: "flex", padding: "5px" }}>
        {props.icon}
        <p style={{ marginLeft: "10px" }}>{props.type} 68% </p>
      </div>
    );
  }
};

export default IconPropertyValue;
