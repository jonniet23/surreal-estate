import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faEnvelope,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";

const propertyCard = ({
  bathrooms,
  bedrooms,
  city,
  email,
  price,
  title,
  type,
}) => (
  <div className="property-card__container">
    <div className="property-card">
      <div className="property-card__logo-container">
        <img
          className="property-card__logo"
          src="https://static.vecteezy.com/system/resources/previews/008/123/821/original/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg"
          alt="House logo"
        />
      </div>
      <div className="property-card__text-field">
        <p className="property-card__text">{title}</p>
        <p className="property-card__text">{type}</p>
        <p className="property-card__text">{city}</p>
      </div>
      <div className="property-card__icon-field">
        <FontAwesomeIcon className="property-card__icon" icon={faBath} />
        {bathrooms}
      </div>
      <div className="property-card__icon-field">
        <FontAwesomeIcon className="property-card__icon" icon={faBed} />
        {bedrooms}
      </div>
      <div className="property-card__icon-field">
        <FontAwesomeIcon icon={faSterlingSign} />
        {price}
      </div>
      <div className="property-card__email">
        <Link className="property-card__link" to={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </Link>
      </div>
    </div>
  </div>
);

export default propertyCard;
