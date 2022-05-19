import React, { useContext } from "react";
import { CityContext } from "../Context/CityContext";
import "../Styles/SearchBar.css";

const SearchBar = () => {
/*
  const {city,setCity} = useContext(CityContext)
*/
  return (
    <form id="searchBar" className="searchBarForm">
      <button className="buttonSearchBar" type="submit"></button>
      <input id="inputLocation" className="inputSearchBar" type="search" placeholder="search"></input>
    </form>
  );
};

export default SearchBar;
