import React from "react";
import Box from "./Box";
import SimpleDayInfo from "./SimpleDayInfo";
import ComplexDayInfo from "./ComplexDayInfo";

const DayBasicStatus = () => {
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
