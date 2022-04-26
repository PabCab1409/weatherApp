import React from "react";
import "../Styles/SearchBar.css";

const SearchBar = () => {
  return (
    <form className="searchBarForm">
      <button className="buttonSearchBar" type="submit"></button>
      <input id="inputLocation" className="inputSearchBar" type="search" placeholder="search"></input>
    </form>
  );
};

export default SearchBar;
