import React from "react";
import { Routes, Route } from "react-router-dom";
import Properties from "./Properties";
import Navbar from "./navbar";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Properties />} />
      <Route path="add-property" element={<AddProperty />} />
    </Routes>
    <AddProperty />
  </div>
);

export default App;
