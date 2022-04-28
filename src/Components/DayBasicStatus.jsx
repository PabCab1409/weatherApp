import React, { useState, useEffect } from "react";
import Box from "./Box";
import SimpleDayInfo from "./SimpleDayInfo";
import ComplexDayInfo from "./ComplexDayInfo";
import "../Styles/Spinner.css";

const DayBasicStatus = () => {

  /*
  if (isLoading) {
    return (
      <div style={{ height: 200, justifyContent: "center", display: "flex" }}>
        <div className="spinner"></div>
      </div>
    );
  }
*/
  return (
    <Box
      props={
        <React.Fragment>
          <SimpleDayInfo></SimpleDayInfo>
          <ComplexDayInfo></ComplexDayInfo>
        </React.Fragment>
      }
    ></Box>
    
  );
};

export default DayBasicStatus;
