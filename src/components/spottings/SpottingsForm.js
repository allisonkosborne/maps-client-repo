import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createSpottings } from "./SpottingsManager.js";
import "./SpottingsForm.css";

export const SpottingsForm = () => {
  const history = useHistory();
  // const [gameTypes, setGameTypes] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentSpotting, setCurrentSpotting] = useState({
    id: 1,
    name: "",
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
        <div className="form-group">
          <label htmlFor="name">Species: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentSpotting.name}
            onChange={changeSpottingsState}
          />
        </div>
      </fieldset>

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
              date: currentSpotting.date,
              time: currentSpotting.time,
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
