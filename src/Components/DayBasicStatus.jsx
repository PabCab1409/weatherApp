import React from "react";
import "./DayBasicStatus.css";
import Box from "./Box";

const DayBasicStatus = () => {
  return (
    <Box>
      <div className="generalInfo" >
       <div className="cityDegrees">
         Toledo
         18C
       </div>
       <div className="iconState">
         <img style={{width:200}} src="https://www.metaweather.com/static/img/weather/hc.svg"></img>
       </div>
      </div>
      <div className="dayInfo">asda</div>
    </Box>
  );
};

export default DayBasicStatus;
