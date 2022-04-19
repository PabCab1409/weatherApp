import React from "react";
import "../Styles/SearchBar.css"
const SearchBar = () => {
  return (
    <form>
      <input type="search" placeholder="search"></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
