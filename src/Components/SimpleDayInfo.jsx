import React, { useEffect,useState } from "react";
import "../Styles/SimpleDayInfo.css";

const SimpleDayInfo = (props) => {

  const [state,useState] = useState(false)

  if(props.json != null | props.json != undefined){
    useState(true)
  }

  if(!state){
    return(<div>wait</div>)
  }

  var json = props.json

  return (
    <div className="generalInfo">
      <div className="iconState">
        <img
          style={{ width: 200 }}
          src="https://www.metaweather.com/static/img/weather/s.svg"
        ></img>
      </div>
      <div className="cityInfo">
        <h1 className="cityDegree">{Math.round(json['consolidated_weather'][0]['the_temp']) }º C</h1>
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
