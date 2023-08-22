import React from "react";
import "../styles/app.css";
import Navbar from "./navbar";

const App = () => (
  <div className="App">
    <Navbar />
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>Surreal Estate</h2>
    </a>
  </div>
);

export default App;
