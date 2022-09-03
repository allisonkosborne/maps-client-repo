import React from "react";
import { Link } from "react-router-dom";
import "./Locations.css";

export const LocationsCard = ({ locations }) => {
  return (
    <div className="locations-card">
      <Link to={`/locations/${locations.id}`}>
        <h3>{locations.name}</h3>
      </Link>
      <div className="location-card-img-wrapper">
        {/* <img className="species-card-img" src={species.img_url} /> */}
      </div>
      <div className="card-info">
        {/* <p className="location-card-food">{location.food}</p> */}
      </div>
    </div>
  );
};
