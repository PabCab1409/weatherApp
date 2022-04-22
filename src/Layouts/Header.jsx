import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="containerMenu">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Map</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
