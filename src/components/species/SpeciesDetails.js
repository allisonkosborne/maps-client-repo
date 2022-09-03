import React from "react";
import { Link } from "react-router-dom";
import "./Species.css";

export const SpeciesDetails = ({ species }) => {
  return (
    <div className="species">
      <Link to={`/species/${species.id}`}>
        <h3>{species.name}</h3>
      </Link>
      <div className="species-img-wrapper">
        {/* <img className="species-img" src={species.img_url} /> */}
      </div>
      <div className="species-info">
        <p className="species-food">{species.food}</p>
      </div>
    </div>
  );
};
