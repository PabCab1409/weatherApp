import React from "react";
import "./DayBasicStatus.css";
import Box from "./Box";
import ComplexDayInfo from "./ComplexDayInfo"

const DayBasicStatus = () => {
  return (
    <Box>
      <div className="generalInfo">
        <div className="iconState">
          <img
            style={{ width: 200 }}
            src="https://www.metaweather.com/static/img/weather/hc.svg"
          ></img>
        </div>
        <div className="cityInfo">
          <h1 className="cityDegree">18 C</h1>
          <h2>Toledo</h2>
          <p>Nublado</p>
          <div className="minMax">
            <p>18º C</p>
            <p>21º C</p>
          </div>
        </div>
      </div>
      <ComplexDayInfo></ComplexDayInfo>
    </Box>
  );
};

export default DayBasicStatus;
