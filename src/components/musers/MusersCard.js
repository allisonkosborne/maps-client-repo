import React from "react";
import { Link } from "react-router-dom";
import "./Musers.css";

export const MusersCard = ({ users }) => {
  return (
    <div className="musers-card">
      <Link to={`/users/${users.id}`}>
        <h3>{users.name}</h3>
      </Link>
      <div className="users-card-img-wrapper">
        {/* <img className="species-card-img" src={species.img_url} /> */}
      </div>
      <div className="card-info">
        <p className="users-card-food">{users.weapon}</p>
      </div>
    </div>
  );
};
