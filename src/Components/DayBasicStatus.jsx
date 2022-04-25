import React, { useState, useEffect } from "react";
import DaysForecast from "./DaysForecast"
import Box from "./Box";
import SimpleDayInfo from "./SimpleDayInfo";
import ComplexDayInfo from "./ComplexDayInfo";
import "../Styles/Spinner.css";

const DayBasicStatus = () => {
  var simplePath =
    "https://www.metaweather.com/api/location/search/?query=london";
  var finalJson;
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(simplePath)
      .then((response) => response.json())
      .then((json) => {
        var woeid = json["0"]["woeid"];
        var complexPath = `https://www.metaweather.com/api/location/${woeid}/`;

        fetch(complexPath)
          .then((response) => response.json())
          .then((data) => {
            finalJson = data;
            setLoading(false);
            
          })
          .catch((error) => {
            <p>{error}</p>
          });
      })
      .catch((error) => {
        <p>{error}</p>
      });
  };

  useEffect(() => {
    fetchData();
  });

  if (isLoading) {
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
          <SimpleDayInfo></SimpleDayInfo>
          <ComplexDayInfo></ComplexDayInfo>
        </React.Fragment>
      }
    ></Box>
    
  );
};

export default DayBasicStatus;
