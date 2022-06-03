import React, { useState, useEffect } from "react";
import DayBasicStatus from "./Components/DayBasicStatus";
import SearchBar from "./Components/SearchBar";
import Header from "./Layouts/Header.jsx";
import DaysForecast from "./Components/DaysForecast";
import Footer from "./Layouts/Footer";
import Contact from "./Layouts/Contact";
import { CityContextProvider } from "./Context/CityContext";

var locationToSearch;

function App() {

  const [json, setJson] = useState([]);
  const [forecastDayJson, setForecastDayJson] = useState([]);
  const API_KEY = "30c3611ec6133e63bf67089bdb89b52b";

  useEffect(() => {
    var path = `https://api.openweathermap.org/data/2.5/weather?q=toledo&appid=${API_KEY}&units=metric&lang=es`;

    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        setJson(json);

        //obtengo el forecast json a partir del json usando la lon y lat proporcionada
        var lat = json["coord"]["lat"];
        var lon = json["coord"]["lon"];
        var forecastPath = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&units=metric&lang=es&appid=${API_KEY}`;
        
        fetch(forecastPath)
          .then((response) => response.json())
          .then((forecastJson) => { 
            setForecastDayJson(forecastJson["daily"])
          })
          .catch((error) => {
            <p>{error}</p>;
          });

      })
      .catch((error) => {
        <p>{error}</p>;
      });
  }, []);

  if (json == "") {
    return (
      <React.Fragment>
        <Header></Header>
        <SearchBar></SearchBar>
        <div style={{ height: 400, justifyContent: "center", display: "flex" }}>
          <div className="spinner"></div>
        </div>
        <Contact></Contact>
        <Footer></Footer>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header></Header>
      <CityContextProvider>
        <SearchBar></SearchBar>
        <DayBasicStatus json={json}></DayBasicStatus>
        <DaysForecast forecastDayJson={forecastDayJson} ></DaysForecast>
      </CityContextProvider>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
