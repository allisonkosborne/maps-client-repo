import React from "react";
import { Link } from "react-router-dom";
import "./Spottings.css";

export const SpottingsCard = ({ spottings }) => {
  return (
    <div className="spottings-card">
      {/* <Link to={`/spottings/${spottings.id}`}> */}
      <h3>{spottings.date}</h3>
      {/* </Link> */}
      <div className="spottings-card-img-wrapper">
        {/* <img className="species-card-img" src={species.img_url} /> */}
      </div>
      <div className="card-info">
        <p className="spottings-card-time">{spottings.time}</p>
        {/* <p className="spottings-card-food">{spottings.time}</p>
        <p className="spottings-card-food">{spottings.time}</p>
        <p className="spottings-card-food">{spottings.time}</p> */}
      </div>
    </div>
  );
};