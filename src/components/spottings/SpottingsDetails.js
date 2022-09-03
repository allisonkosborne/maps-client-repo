import React from "react";
import { Link } from "react-router-dom";
import "./Spottings.css";

export const SpottingsDetails = ({ spottings, location }) => {
  return (
    <div className="spottings">
      <h3>{spottings.date}</h3>
      <div className="spottings-img-wrapper">
        {/* <img className="species-img" src={species.img_url} /> */}
      </div>
      <div className="spottings-info">
        <p className="spottings-time">{spottings.time}</p>
        <p className="spottings-location">{location.name}</p>
        {/* <p className="spottings-time">{species.time}</p>
        <p className="spottings-time">{species.time}</p> */}
      </div>
    </div>
  );
};
