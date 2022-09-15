import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getSpecies } from "../species/SpeciesManager.js";
import {
  createSpottings,
  getSpeciesForSpForm,
  getLocationsForSpForm,
} from "./SpottingsManager.js";
import "./SpottingsForm.css";
import { getLocations } from "../locations/LocationsManager.js";

export const SpottingsForm = () => {
  // const monsterUser = JSON.parse(window.sessionStorage.getItem("maps_user"));
  // const monsterUserId = monsterUser.id;
  const history = useHistory();
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

  const [speciesList, setSpeciesList] = useState([]);
  const [chosenSpecies, setChosenSpecies] = useState("");

  const [locationList, setLocationList] = useState([]);
  const [chosenLocation, setChosenLocation] = useState("");

  useEffect(() => {
    getSpecies()
      .then(setSpeciesList)
      .then(() => {
        getLocations().then(setLocationList);
      });
  }, []);

  const handleSpeciesDropdown = (evt) => {
    const speciesId = evt.target.value;
    // const speciesId = speciesList.id;

    // const addSpeciesToSpotting = {
    //   // usersId: monsterUserId,
    //   spottingsId: spottingsId,
    //   speciesId: speciesId,
    // };
    setChosenSpecies(speciesId);
  };

  const handleLocationDropdown = (evt) => {
    const locationId = evt.target.value;
    // const locationId = locationList.id;

    // const addLocationToSpotting = {
    //   // usersId: monsterUserId,
    //   spottingsId: spottingsId,
    //   locationId: locationId,
    // };
    setChosenLocation(locationId);
  };

  const [currentSpotting, setCurrentSpotting] = useState({
    id: 1,
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

  useEffect(() => {
    setChosenSpecies(currentSpotting.species.id);
  }, [currentSpotting]);

  useEffect(() => {
    setChosenLocation(currentSpotting.location.id);
  }, [currentSpotting]);

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
          value={chosenSpecies}
          name="speciesId"
          required
        >
          <option value="0" className="add_to_spotting">
            Add to Spotting
          </option>
          {speciesList.map((species) => (
            <option key={species.id} value={species.id}>
              {species.name}
            </option>
            //Creates dropdown for user's collections
          ))}
        </select>
        {/* <div className="species_names">
          <h3 className="collection_title">Species:</h3>
          <p>
            {speciesList.map(
              (speciesOfSpotting) => speciesOfSpotting.species.name
            )}
          </p>
        </div> */}
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
        <label htmlFor="locationId" className="location_dropdown">
          {/* Collections */}
        </label>
        <select
          className="location_dropdown"
          id="locationId"
          onChange={handleLocationDropdown}
          value={chosenLocation}
          name="locationId"
          required
        >
          <option value="0" className="add_to_spotting">
            Add to Spotting
          </option>
          {locationList.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
            //Creates dropdown for user's collections
          ))}
        </select>
        {/* <div className="species_names">
          <h3 className="collection_title">Species:</h3>
          <p>
            {speciesList.map(
              (speciesOfSpotting) => speciesOfSpotting.species.name
            )}
          </p>
        </div> */}
      </fieldset>
      {/* <fieldset>
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
      </fieldset> */}
      <div className="button-div">
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const spottings = {
              species: parseInt(chosenSpecies),
              date: currentSpotting.date,
              time: currentSpotting.time,
              location: parseInt(chosenLocation),
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
