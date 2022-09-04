import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getLocations } from "./LocationsManager.js";
import { LocationsCard } from "./LocationsCard.js";
import "./Locations.css";
import "../Maps.css";

export const LocationsList = () => {
  const history = useHistory();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then((data) => setLocations(data));
  }, []);

  return (
    <>
      <div className="locations">
        <section className="locations_cards">
          {locations.map((locations) => (
            <LocationsCard key={locations.id} locations={locations} />
          ))}
        </section>
      </div>
      <div className="center">
        <button
          className="btn"
          onClick={() => {
            history.push({ pathname: "/locations/create" });
          }}
        >
          Add Location
        </button>
      </div>
    </>
  );
};
