import React from "react";
import "../Styles/DaysForecast.css";

const ForecastBox = (props) => {
  return <div className="forecastBox">{props.props}</div>;
};

const DaysForecast = (props) => {
  var json = props.json["consolidated_weather"];
  const arrayJson = Object.keys(json).map((key) => [key, json[key]]);

  return (
    <div className="forecastContainer">
      {arrayJson.map((dayInfo) => {
        var dayJson = new Date(dayInfo["1"]["applicable_date"]).getDay();
        function printDay() {
          switch (dayJson) {
            case 0:
              return "Monday";
            case 1:
              return "Tuesday";
            case 2:
              return "Wednesday";
            case 3:
              return "Thursday";
            case 4:
              return "Friday";
            case 5:
              return "Saturday";
            case 6:
              return "Sunday";
          }
        }
        var day = printDay();
        var stateImg = dayInfo["1"]["weather_state_abbr"];
        var img = `https://www.metaweather.com/static/img/weather/${stateImg}.svg`;
        var degrees = Math.round(dayInfo["1"]["the_temp"]);
        var max = Math.round(dayInfo["1"]["max_temp"]);
        var min = Math.round(dayInfo["1"]["min_temp"]);
        {
          console.log(dayInfo);
        }

        return (
          <ForecastBox
            props={
              <div className="forecastContainerInfo">
                <p>{day}</p>
                <img src={img} style={{ width: 50 }}></img>
                <h1>{degrees}º</h1>
                <div className="forecastMinMax">
                  <p className="max">{max}</p>
                  <p className="min">{min}</p>
                </div>
              </div>
            }
          ></ForecastBox>
        );
      })}
    </div>
  );
};

export default DaysForecast;
