import React from "react";
import "../Styles/DaysForecast.css";

const ForecastBox = (props) => {
  return <div className="forecastBox">{props.props}</div>;
};

const DaysForecast = ({forecastDayJson}) => {
  
    const arrayforecastJson = Object.keys(forecastDayJson).map((key) => [
      key,
      forecastDayJson[key],
    ]);
  
    return (
      <div className="forecastContainer">
        {arrayforecastJson.map((dayInfo) => {

          var days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']; 
          var dayNum = new Date(dayInfo[1]['dt'] * 1000).getDay()
          var day = days[dayNum];
          
          var iconId = dayInfo[1]['weather'][0]['icon']
          var src = `http://openweathermap.org/img/wn/${iconId}@2x.png`
          var degrees = Math.round(dayInfo[1]['feels_like']['day'])
          var max = Math.round(dayInfo[1]['temp']['max'])
          var min = Math.round(dayInfo[1]['temp']['min'])

          return (
            <React.Fragment>
              <a className="clickableDiv">
                <ForecastBox
                  props={
                    <div className="forecastContainerInfo">
                      <p>{day}</p>
                      <img
                        src={src}
                        style={{ width: 50 }}
                      ></img>
                      <h1>{degrees}º</h1>
                      <div className="forecastMinMax">
                        <p className="max">{max}</p>
                        <p className="min">{min}</p>
                      </div>
                    </div>
                  }
                ></ForecastBox>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    );
    
};

export default DaysForecast;
