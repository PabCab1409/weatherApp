import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="containerMenu">
      <ul>
        <li>
          <a href="#searchBar">Search</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
