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
import IconPropertyValue from "./IconPropertyValue";

const ComplexDayInfo = () => {
  return (
    <div className="complexInfoContainer">
      <div className="firstInfoContainer">
        <div className="first3elements">
          <IconPropertyValue
            icon={<Water />}
            type="Humedad"
            value="68%"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Visibility />}
            type="Visibilidad"
            value="11 miles"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Gauge />}
            type="Presion"
            value="1004 mb"
          ></IconPropertyValue>
        </div>

        <div className="second3elements">
          <IconPropertyValue
            icon={<Confidence />}
            type="Exactitud"
            value="99%"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindSpeed />}
            type="Velocidad del viento"
            value="19 mph"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindDirection />}
            type="Direccion del viento"
            value="SSW"
          ></IconPropertyValue>
        </div>
      </div>

      <div className="n">
          <IconPropertyValue
            icon={<SunSet />}
            type="Puesta de sol"
            value="07:12:55"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<SunRise />}
            type="Salida de sol"
            value="07:12:55"
          ></IconPropertyValue>
      </div>
    </div>
  );
};

export default ComplexDayInfo;
