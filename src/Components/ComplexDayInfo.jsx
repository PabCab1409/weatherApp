import React from "react";
import "../Styles/ComplexDayInfo.css";
import {
  Water,
  Visibility,
  Gauge,
  Confidence,
  WindSpeed,
  WindDirection,
  SunRise,
  SunSet,
} from "../Icons/Icons";
import IconPropertyValue from "./IconPropertyValue";

const ComplexDayInfo = (props) => {

var json = props.json
var humidity = json['consolidated_weather'][0]['humidity']
var visibility = Math.round(json['consolidated_weather'][0]['visibility'])
var pressure = Math.round(json['consolidated_weather'][0]['air_pressure'])
var dateSunset = new Date(json['sun_set'])
var sunSet = dateSunset.getUTCHours()+":"+dateSunset.getUTCMinutes()
var probability = json['consolidated_weather'][0]['predictability']
var winSpeed = Math.round(json['consolidated_weather'][0]['wind_speed'])
var winDirection = json['consolidated_weather'][0]['wind_direction_compass']
var dateSunRise = new Date(json['sun_rise'])
var sunRise = dateSunRise.getUTCHours()+":"+dateSunRise.getUTCMinutes()

  return (
    <div className="complexInfoContainer">
      <div className="firstInfoContainer">
        <div className="first4elements">
          <IconPropertyValue
            icon={<Water />}
            type="Humedad"
            value={`${humidity}%`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Visibility />}
            type="Visibilidad"
            value={`${visibility} miles`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Gauge />}
            type="Presion"
            value={`${pressure} mb`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<SunSet />}
            type="Puesta de sol"
            value={sunSet}
          ></IconPropertyValue>
        </div>

        <div className="second4elements">
          <IconPropertyValue
            icon={<Confidence />}
            type="Exactitud"
            value={`${probability}%`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindSpeed />}
            type="Velocidad del viento"
            value={`${winSpeed} mph`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindDirection />}
            type="Direccion del viento"
            value={`${winDirection}`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<SunRise />}
            type="Salida de sol"
            value={sunRise}
          ></IconPropertyValue>
        </div>
      </div>
    </div>
  );
};

export default ComplexDayInfo;
