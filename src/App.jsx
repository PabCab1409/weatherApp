import React from "react";
import DayBasicStatus from "./Components/DayBasicStatus";
import SearchBar from "./Components/SearchBar";
import Header from "./Layouts/Header.jsx";
import DaysForecast from "./Components/DaysForecast";

function App() {
  
  return (
      <React.Fragment>
        <Header></Header>
        <SearchBar></SearchBar>
        <DayBasicStatus></DayBasicStatus>
        <DaysForecast></DaysForecast>
      </React.Fragment>
  );
}

export default App;
