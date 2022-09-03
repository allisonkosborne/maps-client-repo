import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="navbar__item">
        <Link className="nav-link" to="/species" id="middle">
          Species
        </Link>
      </div>
      <div className="navbar__item">
        <Link className="nav-link" to="/spottings" id="middle">
          Spottings
        </Link>
      </div>
      <div className="navbar__item">
        <Link className="nav-link" to="/locations" id="middle">
          Locations
        </Link>
      </div>
      {localStorage.getItem("lu_token") !== null ? (
        <div className="nav-item" id="middle">
          <button
            className="nav-link fakeLink"
            onClick={() => {
              localStorage.removeItem("lu_token");
              history.push({ pathname: "/" });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <div className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </div>
        </>
      )}{" "}
    </div>
  );
};
