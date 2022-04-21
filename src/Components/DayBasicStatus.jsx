import React from "react";
import "./DayBasicStatus.css";
import Box from "./Box";
import ComplexDayInfo from "./ComplexDayInfo"
import "../Styles/DayBasicStatus.css"
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
          <h1 className="cityDegree">18º C</h1>
          <h2>Toledo</h2>
          <p style={{marginTop:10}}>Nublado</p>
          <div className="minMax">
            <div>
            <p className="min">24º</p><b>C</b>
            </div>
            <div>
            <p className="max">5º</p><b>C</b>
            </div>
          </div>
        </div>
      </div>
      <ComplexDayInfo></ComplexDayInfo>
    </Box>
  );
};

export default DayBasicStatus;
