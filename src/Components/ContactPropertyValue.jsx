import React from "react";
import { UserIcon } from "../Icons/Icons";
import "../Styles/ContactPropertyValue.css"

const ContactPropertyValue = ({property,type}) => {
  return (
    <div className="propertyValueContainer">
        <input className="inputContact" placeholder={property} type={type}></input>
      </div>
  );
};

export default ContactPropertyValue
