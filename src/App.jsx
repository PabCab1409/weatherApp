import React from "react";
import DayBasicStatus from "./Components/DayBasicStatus";
import SearchBar from "./Components/SearchBar";
import Header from "./Layouts/Header.jsx";
import DaysForecast from "./Components/DaysForecast";
import Footer from "./Layouts/Footer"
import Contact from "./Layouts/Contact";
function App() {
  
  return (
      <React.Fragment>
        <Header></Header>
        <SearchBar></SearchBar>
        <DayBasicStatus></DayBasicStatus>
        <DaysForecast></DaysForecast>
        <Contact></Contact>
        <Footer></Footer>
      </React.Fragment>
  );
}

export default App;
