import React from "react";
import Box from "./Box.jsx";
import "./DayBasicStatus.css";

const DayBasicStatus = () => {
  return (
    <Box>
      <div className="generalInfo">
        <h1 className="degreesTitle">18 °C</h1>
        <img
          className="weatherImg"
          src="https://www.metaweather.com/static/img/weather/s.svg"
        ></img>
      </div>
      <div className="dayInfo">asda</div>
    </Box>
  );
};

export default DayBasicStatus;
