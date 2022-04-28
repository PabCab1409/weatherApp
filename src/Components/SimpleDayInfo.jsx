import React, { Suspense, useEffect,useState } from "react";
import "../Styles/SimpleDayInfo.css";
import "../Styles/Spinner.css";


const SimpleDayInfo = (props) => {

  const [json,setJson] = useState([]);

  useEffect(() => {

    var simplePath =
    "https://www.metaweather.com/api/location/search/?query=london";

    fetch(simplePath)
    .then((response) => response.json())
    .then((json) => {
      var woeid = json["0"]["woeid"];
      var complexPath = `https://www.metaweather.com/api/location/${woeid}/`;
      
      fetch(complexPath)
        .then((response) => response.json())
        .then((json) => setJson(json))
        .catch((error) => {
          <p>{error}</p>
        });
    })
    .catch((error) => {
      <p>{error}</p>
    });

  },[]);

  if(json == ""){
    return (
      <div style={{ height: 200, justifyContent: "center", display: "flex" }}>
        <div className="spinner">si</div>
      </div>
    );
  }

  var degree = Math.round(json['consolidated_weather'][0]['the_temp'])


  return (
      <div className="generalInfo">
      <div className="iconState">
        <img
          style={{ width: 200 }}
          src="https://www.metaweather.com/static/img/weather/s.svg"
        ></img>
      </div>
      <div className="cityInfo">
        <h1 className="cityDegree">{degree}º C</h1>
        <h2>Toledo</h2>
        <p style={{ marginTop: 10 }}>Nublado</p>
        <div className="minMax">
          <div>
            <p className="min">24º</p>
            <b>C</b>
          </div>
          <div>
            <p className="max">5º</p>
            <b>C</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDayInfo;
