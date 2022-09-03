import React from "react";
import { Link } from "react-router-dom";
import "./Species.css";

export const SpeciesCard = ({ species }) => {
  return (
    <div className="species-card">
      <Link to={`/species/${species.id}`}>
        <h3>{species.name}</h3>
      </Link>
      <div className="species-card-img-wrapper">
        {/* <img className="species-card-img" src={species.img_url} /> */}
      </div>
      <div className="card-info">
        <p className="species-card-food">{species.food}</p>
      </div>
    </div>
  );
};
