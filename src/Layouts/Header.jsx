import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="containerMenu">
      <ul>
        <li>
          <a className="headerLinks" href="#searchBar">Search</a>
        </li>
        <li>
          <a className="headerLinks" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
