import React from "react";
import { Link } from "react-router-dom";
import "./Locations.css";

export const LocationsDetails = ({ locations }) => {
  return (
    <div className="locations">
      <Link to={`/locations/${locations.id}`}>
        <h3>{locations.name}</h3>
      </Link>
      <div className="locations-img-wrapper">
        {/* <img className="species-img" src={species.img_url} /> */}
      </div>
      <div className="locations-info">
        {/* <p className="species-food">{species.food}</p> */}
      </div>
    </div>
  );
};
