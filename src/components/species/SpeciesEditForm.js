import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createSpecies,
  getSpeciesById,
  updateSpecies,
} from "./SpeciesManager.js";
import "./SpeciesForm.css";

export const SpeciesEditForm = (species) => {
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

  const [isLoading, setIsLoading] = useState(false);
  const { speciesId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...species };
    stateToChange[evt.target.name] = evt.target.value;
    setCurrentSpecies(stateToChange);
  };

  const updateExistingSpecies = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedSpecies = {
      id: speciesId,
      name: species.name,
      food: species.food,
    };

    updateSpecies(editedSpecies).then(() => history.push("/species"));
  };

  useEffect(() => {
    getSpeciesById(speciesId).then((species) => {
      setCurrentSpecies(species);
      setIsLoading(false);
    });
  }, []);

  return (
    <form className="speciesForm">
      <h2 className="speciesForm__title">Edit Species</h2>
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
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>
      <div className="button-div">
        <button
          type="button"
          disabled={isLoading}
          onClick={updateExistingSpecies}
          className="btn btn-primary"
        >
          Save
        </button>
        {/* <button
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
          Save
        </button> */}
      </div>
    </form>
  );
};
