import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createSpottings, getSpottingsById } from "./SpottingsManager.js";
import "./SpottingsForm.css";

export const SpottingsEditForm = (spottings) => {
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentSpottings, setCurrentSpottings] = useState({
    id: 1,
    date: "",
    time: "",
    location_id: "",
    monster_user_id: "",
    species: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { spottingsId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...spottings };
    stateToChange[evt.target.id] = evt.target.value;
    setCurrentSpottings(stateToChange);
  };

  const updateExistingSpottings = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedSpottings = {
      id: spottingsId,
      date: spottings.date,
      time: spottings.time,
      location_id: "",
      monster_user_id: "",
      species: "",
    };

    updateExistingSpottings(editedSpottings).then(() => history("/spottings"));
  };

  useEffect(() => {
    getSpottingsById(spottingsId).then((spottings) => {
      setCurrentSpottings(spottings);
      setIsLoading(false);
    });
  }, []);

  return (
    <form className="spottingsForm">
      <h2 className="spottingsForm__title">Edit Spotting</h2>
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
      <div className="button-div">
        <button
          type="submit"
          onClick={(evt) => {
            // Prevent form from being submitted
            evt.preventDefault();

            const spottings = {
              date: currentSpottings.date,
              time: currentSpottings.time,
            };

            // Send POST request to your API
            createSpottings(spottings).then(() => history.push("/spottings"));
          }}
          className="create-spottings"
        >
          Save
        </button>
      </div>
    </form>
  );
};
