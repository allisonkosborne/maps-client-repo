import React from "react";
import { Link } from "react-router-dom";
import "./Species.css";

export const MusersDetails = ({ users }) => {
  return (
    <div className="musers">
      <Link to={`/users/${users.id}`}>
        <h3>{users.name}</h3>
      </Link>
      <div className="users-img-wrapper">
        {/* <img className="species-img" src={species.img_url} /> */}
      </div>
      <div className="users-info">
        <p className="users-weapon">{users.weapon}</p>
      </div>
    </div>
  );
};
