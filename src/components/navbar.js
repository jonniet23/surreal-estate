import React from "react";
import "../styles/navbar.css";

const NavBar = () => (
  <div className="navbar">
    <img
      className="navbar-logo"
      src="https://static.vecteezy.com/system/resources/previews/008/123/821/original/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg"
      alt="House logo"
    />
    <h1 className="title">Surreal Estate</h1>
    <div className="navbar-links">
      <ul>
        <div className="navbar-links-item" />
        <li>
          <a href="https://google.com">View Properties</a>
        </li>
        <li>
          <a href="https://google.com">Add a Property</a>
        </li>
      </ul>
    </div>
  </div>
);
export default NavBar;
