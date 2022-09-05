import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createLocations } from "./LocationsManager.js";
import "./LocationsForm.css";

export const LocationsForm = () => {
  const history = useHistory();
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentLocation, setCurrentLocation] = useState({
    id: 1,
    name: "",
    // food: "",
  });

  // useEffect(() => {
  //   getGameTypes().then((data) => setGameTypes(data));
  // }, []);

  const changeLocationState = (domEvent) => {
    let newLocation = { ...currentLocation };
    let newValue = domEvent.target.value;
    newLocation[domEvent.target.name] = newValue;
    setCurrentLocation(newLocation);
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">Register New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentLocation.name}
            onChange={changeLocationState}
          />
        </div>
      </fieldset>

      {/* <fieldset>
        <div className="form-group">
          <label htmlFor="food">Favorite Food: </label>
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
      </fieldset> */}
      <div className="button-div">
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const location = {
              name: currentLocation.name,
              // food: currentSpecies.food,
            };

            // Send POST request to your API
            createLocations(location).then(() => history.push("/locations"));
          }}
          className="create-locations"
        >
          Create
        </button>
      </div>
    </form>
  );
};
