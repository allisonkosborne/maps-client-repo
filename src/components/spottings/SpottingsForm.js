import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getSpecies } from "../species/SpeciesManager.js";
import { createSpottings, getSpeciesForSpForm } from "./SpottingsManager.js";
import "./SpottingsForm.css";

export const SpottingsForm = () => {
  const monsterUser = JSON.parse(window.sessionStorage.getItem("maps_user"));
  const monsterUserId = monsterUser.id;
  const history = useHistory();
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

  const [species, setSpecies] = useState([]);
  const [speciesOfSpotting, setSpeciesOfSpotting] = useState([]);

  useEffect(() => {
    getSpecies(monsterUserId).then(setSpecies);
    getSpeciesForSpForm(monsterUserId, species.id).then((speciesOfSpotting) => {
      setSpeciesOfSpotting(speciesOfSpotting);
    });
  }, []);

  const handleSpeciesDropdown = (evt) => {
    const spottingsId = evt.target.value;
    const speciesId = species.id;

    const speciesToSpotting = {
      usersId: monsterUserId,
      spottingsId: spottingsId,
      speciesId: speciesOfSpotting,
    };
    getSpeciesForSpForm(speciesToSpotting);
  };

  const [currentSpotting, setCurrentSpotting] = useState({
    // id: 1,
    species: "",
    date: "",
    time: "",
    location: "",
    // food: "",
  });

  // useEffect(() => {
  //   getGameTypes().then((data) => setGameTypes(data));
  // }, []);

  const changeSpottingsState = (domEvent) => {
    let newSpottings = { ...currentSpotting };
    let newValue = domEvent.target.value;
    newSpottings[domEvent.target.name] = newValue;
    setCurrentSpotting(newSpottings);
  };

  return (
    <form className="spottingsForm" id="#spotting-register">
      <h2 className="spottingsForm__title">Register New Spotting</h2>
      <fieldset>
        <label htmlFor="speciesId" className="species_dropdown">
          {/* Collections */}
        </label>
        <select
          className="species_dropdown"
          id="speciesId"
          onChange={handleSpeciesDropdown}
          value={species.id}
          name="speciesId"
          required
        >
          <option value="0" className="add_to_spotting">
            Add to Spotting
          </option>
          {species.map((species) => (
            <option key={species.id} value={species.id}>
              {species.name}
            </option>
            //Creates dropdown for user's collections
          ))}
        </select>
        <div className="species_names">
          <h3 className="collection_title">Species:</h3>
          <p>
            {speciesOfSpotting.map(
              (speciesOfSpotting) => speciesOfSpotting.species.name
            )}
          </p>
        </div>
      </fieldset>
      {/* <fieldset>
        <div className="form-group">
          <label htmlFor="name">Species: </label>
          <input
            type="text"
            name="species"
            required
            autoFocus
            className="form-control"
            value={currentSpotting.species}
            onChange={changeSpottingsState}
          />
        </div>
      </fieldset> */}

      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentSpotting.date}
            onChange={changeSpottingsState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentSpotting.time}
            onChange={changeSpottingsState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Location: </label>
          <input
            type="location"
            name="location"
            required
            autoFocus
            className="form-control"
            value={currentSpotting.location}
            onChange={changeSpottingsState}
          />
        </div>
      </fieldset>
      <div className="button-div">
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const spottings = {
              species: currentSpotting.species,
              date: currentSpotting.date,
              time: currentSpotting.time,
              location: currentSpotting.location,
            };

            // Send POST request to your API
            createSpottings(spottings).then(() => history.push("/spottings"));
          }}
          className="create-spottings"
        >
          Create
        </button>
      </div>
    </form>
  );
};
