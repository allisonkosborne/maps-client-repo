import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSpecies } from "./SpeciesManager.js";
import { SpeciesCard } from "./SpeciesCard.js";
import "./Species.css";
import "../Maps.css";

export const SpeciesList = () => {
  const history = useHistory();
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getSpecies().then((data) => setSpecies(data));
  }, []);

  return (
    <>
      <div className="species">
        <section className="species_cards">
          {species.map((species) => (
            <SpeciesCard key={species.id} species={species} />
          ))}
        </section>
      </div>
      <div className="center">
        <button
          className="btn"
          onClick={() => {
            history.push({ pathname: "/species/new" });
          }}
        >
          Add Species
        </button>
      </div>
    </>
  );
};
