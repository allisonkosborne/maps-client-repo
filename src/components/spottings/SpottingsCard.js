import React from "react";
import { Link } from "react-router-dom";
import "./Spottings.css";

export const SpottingsCard = ({ spottings, species, location }) => {
  return (
    <div className="spottings-card">
      <Link to={`/spottings/${spottings.id}`}>
        <h3>Monster Spotting</h3>
      </Link>
      <div className="spottings-card-img-wrapper">
        {/* <img className="species-card-img" src={species.img_url} /> */}
      </div>
      <div className="paragraph-card-info">
        <p className="spottings-card-species">{spottings.species.name}</p>
        <p className="spottings-card-date">{spottings.date}</p>
        <p className="spottings-card-time">{spottings.time}</p>
        <p className="spottings-card-species">{spottings.location.name}</p>
        {/* <p className="spottings-card-location">{locations.name}</p> */}
        {/* <p className="spottings-card-food">{spottings.time}</p>
        <p className="spottings-card-food">{spottings.time}</p>
        <p className="spottings-card-food">{spottings.time}</p> */}
      </div>
    </div>
  );
};
