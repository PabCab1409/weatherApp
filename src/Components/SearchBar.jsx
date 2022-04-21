import React from "react";
import "../Styles/SearchBar.css";
import Box from "./Box"

const SearchBar = () => {
  return (
    <form>
    <button type="submit"></button>
    <input
      type="search"
      placeholder="search"
      style={{ color: "white" }}
    ></input>
  </form>
  );
};

export default SearchBar;
