import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createSpecies,
  getLocationById,
  updateLocations,
} from "./LocationsManager.js";
import "./LocationsForm.css";

export const LocationsEditForm = (locations) => {
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentLocation, setCurrentLocation] = useState({
    id: 1,
    name: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { locationId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    // console.log(evt);
    const stateToChange = { ...currentLocation };
    stateToChange[evt.target.name] = evt.target.value;
    setCurrentLocation(stateToChange);
  };

  const updateExistingLocation = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedLocation = {
      id: locationId,
      name: currentLocation.name,
    };
    //look at species vs currentSpecies and what they are being use for

    updateLocations(editedLocation.id, editedLocation).then(() =>
      history.push("/locations")
    );
  };
  //Pay attention to what is being passed in!!!

  useEffect(() => {
    getLocationById(locationId).then((location) => {
      setCurrentLocation(location);
      setIsLoading(false);
    });
  }, []);

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">Edit Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name" className="location-name">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentLocation.name}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      {/* <fieldset>
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
      </fieldset> */}
      <div className="button-div">
        <button
          type="button"
          disabled={isLoading}
          onClick={updateExistingLocation}
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
