import React, { useState, useEffect } from "react";
import Box from "./Box";
import SimpleDayInfo from "./SimpleDayInfo";
import ComplexDayInfo from "./ComplexDayInfo";

const DayBasicStatus = (props) => {

  return (
    <Box
      props={
        <React.Fragment>
          <SimpleDayInfo json={props.json}></SimpleDayInfo>
          <ComplexDayInfo json={props.json}></ComplexDayInfo>
        </React.Fragment>
      }
    ></Box>
    
  );
};

export default DayBasicStatus;
