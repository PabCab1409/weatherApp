import React from "react";

const ErrorMessage = (props) => {
    return(
        <React.Fragment>
            <img src="https://c.tenor.com/udq1uD9WHSQAAAAC/oops.gif" alt="errorImg"></img>s
            <h1>Vaya...ha habido un error</h1>
            <p>`Codigo de error: ${props.message}`</p>
        </React.Fragment>
    )
}

export default ErrorMessage;