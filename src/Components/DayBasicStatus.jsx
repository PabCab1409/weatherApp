import React, { useState, useEffect } from "react";
import Box from "./Box";
import SimpleDayInfo from "./SimpleDayInfo";
import ComplexDayInfo from "./ComplexDayInfo";

const DayBasicStatus = () => {

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

  
  if (json == "") {
    return (
      <div style={{ height: 200, justifyContent: "center", display: "flex" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Box
      props={
        <React.Fragment>
          <SimpleDayInfo json={json}></SimpleDayInfo>
          <ComplexDayInfo json={json}></ComplexDayInfo>
        </React.Fragment>
      }
    ></Box>
    
  );
};

export default DayBasicStatus;
