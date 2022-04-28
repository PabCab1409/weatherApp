import React,{useState,useEffect} from "react";
import DayBasicStatus from "./Components/DayBasicStatus";
import SearchBar from "./Components/SearchBar";
import Header from "./Layouts/Header.jsx";
import DaysForecast from "./Components/DaysForecast";
import Footer from "./Layouts/Footer";
import Contact from "./Layouts/Contact";

function App() {
  const [json, setJson] = useState([]);

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
      <SearchBar></SearchBar>
      <DayBasicStatus json={json}></DayBasicStatus>
      <DaysForecast></DaysForecast>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
