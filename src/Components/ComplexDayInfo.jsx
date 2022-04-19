import React from "react";
import "../Styles/ComplexDayInfo.css";
import {
  Water,
  Visibility,
  Gauge,
  Confidence,
  WindSpeed,
  WindDirection,
  Date,
  SunRise,
  SunSet,
} from "../Icons/Icons";

const ComplexDayInfo = () => {
  return (
    <div className="complexInfoContainer">
      <div className="firstInfoContainer">
        <div className="first3elements">
          <div className="water">
            <Water></Water>
            <p>Humidity 68%</p>
          </div>

          <div>
            <Visibility></Visibility>
            <p>Visibility 11.5km</p>
          </div>

          <div>
            <Gauge></Gauge>
            <p>Pressure 1009mb</p>
          </div>
        </div>

        <div className="second3elements">
          <div>
            <Confidence></Confidence>
            <p>Confidence 75%</p>
          </div>

          <div>
            <WindSpeed></WindSpeed>
            <p>Velocidad del viento</p>
          </div>

          <div>
            <WindDirection></WindDirection>
            <p>Direccion del viento</p>
          </div>
        </div>
      </div>

      <div>
        <Date></Date>
        <p>Hora</p>
      </div>

      <div>
        <SunSet></SunSet>
        <p>Puesta de sol</p>
      </div>

      <div>
        <SunRise></SunRise>
        <p>Salida de sol</p>
      </div>
    </div>
  );
};

export default ComplexDayInfo;
