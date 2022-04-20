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
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Visibility />}
            type="Visibilidad"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Gauge />}
            type="Presion"
          ></IconPropertyValue>
        </div>

        <div className="second3elements">
          <IconPropertyValue
            icon={<Confidence />}
            type="Exactitud"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindSpeed />}
            type="Velocidad del viento"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindDirection />}
            type="Direccion del viento"
          ></IconPropertyValue>
        </div>
      </div>

      <div>
        <div className="date">
          <IconPropertyValue icon={<Date />} type="Hora"></IconPropertyValue>
        </div>
        <div>
          <IconPropertyValue
            icon={<SunSet />}
            type="Puesta de sol"
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<SunRise />}
            type="Salida de sol"
          ></IconPropertyValue>
        </div>
      </div>
    </div>
  );
};

export default ComplexDayInfo;
