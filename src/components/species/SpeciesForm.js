import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createSpecies } from "./SpeciesManager.js";
import "./SpeciesForm.css";

export const SpeciesForm = () => {
  const history = useHistory();
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentSpecies, setCurrentSpecies] = useState({
    id: 1,
    name: "",
    food: "",
  });

  // useEffect(() => {
  //   getGameTypes().then((data) => setGameTypes(data));
  // }, []);

  const changeSpeciesState = (domEvent) => {
    // console.log(domEvent);
    let newSpecies = { ...currentSpecies };
    let newValue = domEvent.target.value;
    newSpecies[domEvent.target.name] = newValue;
    setCurrentSpecies(newSpecies);
  };

  return (
    <form className="speciesForm">
      <h2 className="speciesForm__title">Register New Species</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name" className="species-name">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentSpecies.name}
            onChange={changeSpeciesState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="food" className="species-food">
            Favorite Food:{" "}
          </label>
          <input
            type="text"
            name="food"
            required
            autoFocus
            className="form-control"
            value={currentSpecies.food}
            onChange={changeSpeciesState}
          />
        </div>
      </fieldset>
      <div className="button-div">
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const species = {
              name: currentSpecies.name,
              food: currentSpecies.food,
            };

            // Send POST request to your API
            createSpecies(species).then(() => history.push("/species"));
          }}
          className="create-species"
        >
          Create
        </button>
      </div>
    </form>
  );
};
