import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({
          message: "Sorry, something went wrong. Please try again later.",
        });
      });
  }, []);

  return (
    <div className="properties">
      <div className="properties__cards">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
