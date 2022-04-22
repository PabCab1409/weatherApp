import React, { useEffect, useState, Suspense } from "react";
import DayBasicStatus from "./Components/DayBasicStatus";
import SearchBar from "./Components/SearchBar";
import Header from "./Layouts/Header.jsx";

var json, woeid;
function App() {
  useEffect(() => {
    const fetchData = () => {
      var xhttp = new XMLHttpRequest();
      var path =
        "https://www.metaweather.com/api/location/search/?query=london";

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          json = JSON.parse(xhttp.responseText);
          woeid = json["0"]["woeid"];

          path = `https://www.metaweather.com/api/location/${woeid}/`;

          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              json = JSON.parse(xhttp.responseText);
            }
          };

          xhttp.open("get", path, true);
          xhttp.send();
        }
      };

      xhttp.open("get", path, true);
      xhttp.send();
    };
    fetchData();
  });

  return (
    <Suspense fallback={<p>Loading advice...</p>}>
      <React.Fragment>
        <Header></Header>
        <SearchBar></SearchBar>
        <DayBasicStatus props={json}></DayBasicStatus>
      </React.Fragment>
    </Suspense>
  );
}

export default App;
