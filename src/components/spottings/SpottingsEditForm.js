import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getLocations } from "../locations/LocationsManager.js";
import {
  updateSpottings,
  getSpottingsById,
  getSpeciesForSpForm,
  getLocationsForSpForm,
} from "./SpottingsManager.js";
import "./SpottingsForm.css";
import { getSpecies } from "../species/SpeciesManager.js";

export const SpottingsEditForm = (spottings, species, location) => {
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [speciesList, setSpeciesList] = useState([]);
  const [chosenSpecies, setChosenSpecies] = useState([]);

  const [locationList, setLocationList] = useState([]);
  const [chosenLocation, setChosenLocation] = useState([]);

  const [spottingSpeciesId, setSpottingSpeciesId] = useState([]);
  const [spottingLocationId, setSpottingLocationId] = useState([]);

  useEffect(() => {
    getSpecies().then(setSpeciesList);
    getSpeciesForSpForm(species).then((chosenSpecies) => {
      setChosenSpecies(chosenSpecies);
    });
  }, []);

  useEffect(() => {
    getLocations().then(setLocationList);
    getLocationsForSpForm(location).then((chosenLocation) => {
      setChosenLocation(chosenLocation);
    });
  }, []);

  const [currentSpottings, setCurrentSpottings] = useState({
    id: 1,
    date: "",
    time: "",
    location: "",
    // location_id: "",
    // monster_user_id: "",
    species: "",
  });

  const handleSpeciesDropdown = (evt) => {
    const spottingsId = evt.target.value;
    const speciesId = speciesList.id;
    const spottingSpeciesId = spottingSpeciesId.id;

    const addSpeciesToSpotting = {
      // usersId: monsterUserId,
      spottingsId: spottingsId,
      speciesId: speciesId,
    };
    getSpeciesForSpForm(addSpeciesToSpotting);
  };

  const handleLocationDropdown = (evt) => {
    const spottingsId = evt.target.value;
    const locationId = locationList.id;
    const spottingLocationId = spottingLocationId.id;

    const addLocationToSpotting = {
      // usersId: monsterUserId,
      spottingsId: spottingsId,
      locationId: locationId,
    };
    getLocationsForSpForm(addLocationToSpotting);
  };

  const [isLoading, setIsLoading] = useState(false);
  const { spottingsId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...currentSpottings };
    stateToChange[evt.target.name] = evt.target.value;
    setCurrentSpottings(stateToChange);
  };

  const updateExistingSpottings = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedSpottings = {
      id: spottingsId,
      date: currentSpottings.date,
      time: currentSpottings.time,
      // location_id: "",
      // monster_user_id: "",
      location: currentSpottings.location.name,
      species: currentSpottings.species.name,
    };

    updateSpottings(editedSpottings.id, editedSpottings).then(() =>
      history.push("/spottings")
    );
  };

  useEffect(() => {
    getSpottingsById(spottingsId).then((spottings) => {
      // console.log(spottings);
      setCurrentSpottings(spottings);
      setIsLoading(false);
    });
  }, []);

  return (
    <form className="spottingsForm">
      <h2 className="spottingsForm__title">Edit Spotting</h2>
      <fieldset>
        <label htmlFor="speciesId" className="species_dropdown">
          {/* Collections */}
        </label>
        <select
          className="species_dropdown"
          id="speciesId"
          onChange={handleSpeciesDropdown}
          value={currentSpottings.species.id}
          name="speciesId"
          required
        >
          <option value="0" className="add_to_spotting">
            Edit Species
          </option>
          {speciesList.map((species) => (
            <option key={species.id} value={species.id}>
              {species.name}
            </option>
            //Creates dropdown for user's collections
          ))}
        </select>
        <div className="species_names">
          {/* <h3 className="collection_title">Species:</h3> */}
          {/* <p>{speciesList.map((chosenSpecies) => chosenSpecies.name)}</p> */}
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="date" className="spottings-date">
            Date:{" "}
          </label>
          <input
            type="text"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentSpottings.date}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="" className="spottings-time">
            Time:{" "}
          </label>
          <input
            type="text"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentSpottings.time}
            onChange={handleFieldChange}
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
          value={currentSpottings.location.id}
          name="locationId"
          required
        >
          <option value="0" className="add_to_spotting">
            Edit Location
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
      <div className="button-div">
        {/* <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const spottings = {
              date: currentSpottings.date,
              time: currentSpottings.time,
            };

            // Send POST request to your API
            updateSpottings(spottings).then(() => history.push("/spottings"));
          }}
          className="create-spottings"
        > */}
        <button
          type="button"
          disabled={isLoading}
          onClick={updateExistingSpottings}
          className="btn btn-primary"
        >
          Save
        </button>
      </div>
    </form>
  );
};
