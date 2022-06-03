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

var humidity = json['main']['humidity']
var visibility = json['visibility'] / 1000
var pressure = json['main']['pressure']

var sunSetSecs = json['sys']['sunset']
var date = new Date(sunSetSecs * 1000);
var sunSetTime = date.toLocaleTimeString();

var clouds = json['clouds']['all']
var winSpeed = Math.round(json['wind']['speed']) * 3.6
var winDirection = degToCompass(json['wind']['deg'])

var sunRiseSecs = json['sys']['sunrise']
var date = new Date(sunRiseSecs * 1000);
var sunRiseTime = date.toLocaleTimeString();


function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}


  return (
    <div className="complexInfoContainer">
      <div className="firstInfoContainer">
        <div className="first4elements">
          <IconPropertyValue
            icon={<Water />}
            type="Humedad"
            value={`${humidity} %`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Visibility />}
            type="Visibilidad"
            value={`${visibility} km`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<Gauge />}
            type="Presion"
            value={`${pressure} hpa`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<SunSet />}
            type="Puesta de sol"
            value={sunSetTime}
          ></IconPropertyValue>
        </div>

        <div className="second4elements">
          <IconPropertyValue
            icon={<Confidence />}
            type="Nubes"
            value={`${clouds} %`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindSpeed />}
            type="Velocidad del viento"
            value={`${winSpeed} km/h`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<WindDirection />}
            type="Direccion del viento"
            value={`${winDirection}`}
          ></IconPropertyValue>
          <IconPropertyValue
            icon={<SunRise />}
            type="Salida de sol"
            value={sunRiseTime}
          ></IconPropertyValue>
        </div>
      </div>
    </div>
  );
};

export default ComplexDayInfo;
