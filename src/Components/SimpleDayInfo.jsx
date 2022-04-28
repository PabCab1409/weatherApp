import React, { Suspense, useEffect,useState } from "react";
import "../Styles/SimpleDayInfo.css";
import "../Styles/Spinner.css";


const SimpleDayInfo = (props) => {

  var json = props.json

  if(json == ""){
    return (
      <div style={{ height: 200, justifyContent: "center", display: "flex" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  var stateForImg = json['consolidated_weather'][0]['weather_state_abbr']
  var img = `https://www.metaweather.com/static/img/weather/${stateForImg}.svg`
  var degree = Math.round(json['consolidated_weather'][0]['the_temp'])
  var city = json['title']
  var state = json['consolidated_weather'][0]['weather_state_name']
  var min = Math.round(json['consolidated_weather'][0]['min_temp'])
  var max = Math.round(json['consolidated_weather'][0]['max_temp'])


  return (
      <div className="generalInfo">
      <div className="iconState">
        <img
          style={{ width: 200 }}
          src={img}
        ></img>
      </div>
      <div className="cityInfo">
        <h1 className="cityDegree">{degree}º C</h1>
        <h2>{city}</h2>
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
