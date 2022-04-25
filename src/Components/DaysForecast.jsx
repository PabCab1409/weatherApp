import React from "react";
import "../Styles/DaysForecast.css";

const ForecastBox = (props) =>{
 
    return(
        <div className="forecastBox">{props.props}</div>
    )
}

const DaysForecast = () => {
  return (
    <div className="forecastContainer">
      <ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>

<ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>

<ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>

<ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>

<ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>

<ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>

<ForecastBox
        props={
          <div className="forecastContainerInfo">
            <p>Lunes</p>
            <img
              src="https://www.metaweather.com/static/img/weather/hc.svg"
              style={{ width: 50 }}
            ></img>
            <h1>18º</h1>
            <div className="forecastMinMax">
              <p className="max">24</p>
              <p className="min">19</p>
            </div>
          </div>
        }
      ></ForecastBox>
    </div>
  );
};

export default DaysForecast;
