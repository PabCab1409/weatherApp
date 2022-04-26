import React from "react";
import Box from "../Components/Box";
import "../Styles/Contact.css";
import ContactPropertyValue from "../Components/ContactPropertyValue"

const Contact = () => {
  return <Box props={
    <div className="contactContainer">
        <div className="contactLogoContainer">
        <img className="contactIco" src="https://assets.webiconspng.com/uploads/2017/01/Mail-Transparent-Icon.png"></img>
        </div>
        <form className="contactFormContainer">
        <h3 style={{margin:"auto", marginBottom:10}}>Contact Me</h3>
        <ContactPropertyValue property="Full name"></ContactPropertyValue>
        <ContactPropertyValue property="E-mail" type="email"></ContactPropertyValue>
        <textarea className="textAreaContact" placeholder="Type your message here..."></textarea>
        <button className="buttonContact">Submit</button>
        </form>
    </div>
}></Box>;
};

export default Contact;
