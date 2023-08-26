import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li>
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
export default NavBar;
