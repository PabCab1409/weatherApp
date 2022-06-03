import React, { Suspense, useEffect, useState } from "react";
import "../Styles/SimpleDayInfo.css";
import "../Styles/Spinner.css";

const SimpleDayInfo = (props) => {
  
  var json = props.json;
  
  if (json == "") {
    return (
      <div style={{ height: 200, justifyContent: "center", display: "flex" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  var iconId = json['weather'][0]['icon']
  var src = `http://openweathermap.org/img/wn/${iconId}@2x.png`
  var degrees = Math.round(json['main']['temp'])
  var cityName = json['name']
  var state = json['weather'][0]['description']
  var max = Math.round(json['main']['temp_max'])
  var min = Math.round(json['main']['temp_min'])

  return (
    <div className="generalInfo">
      <div className="iconState">
        <img src={src} style={{ width: 200 }}></img>
      </div>
      <div className="cityInfo">
        <h1 className="cityDegree">{degrees}º C</h1>
        <p>{cityName}</p>
        <p style={{ marginTop: 10 }}>{state}</p>
        <div className="minMax">
          <div>
            <p className="max">{max}º</p>
            <b>C</b>
          </div>
          <div>
            <p className="min">{min}º</p>
            <b>C</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDayInfo;
