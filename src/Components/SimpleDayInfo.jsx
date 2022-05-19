import React, { Suspense, useEffect, useState } from "react";
import "../Styles/SimpleDayInfo.css";
import "../Styles/Spinner.css";
import {fromNumberToDay} from "../Utils/Utils"

const SimpleDayInfo = (props) => {
  var json = props.json;

  if (json == "") {
    return (
      <div style={{ height: 200, justifyContent: "center", display: "flex" }}>
        <div className="spinner"></div>
      </div>
    );
  }


  return (
    <div className="generalInfo">
      <div className="iconState">
        <img style={{ width: 200 }} src={img}></img>
      </div>
      <div className="cityInfo">
        <h1 className="cityDegree">{degree}º C</h1>
        <h2>{city}</h2>
        <p style={{ marginTop: 10 }}>{state}</p>
        <p style={{ marginTop: 5 }}>{day}</p>
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
