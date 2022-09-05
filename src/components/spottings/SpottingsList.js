import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSpottings } from "./SpottingsManager.js";
import { SpottingsCard } from "./SpottingsCard.js";
import "./Spottings.css";
import "../Maps.css";

export const SpottingsList = () => {
  const history = useHistory();
  const [spottings, setSpottings] = useState([]);

  useEffect(() => {
    getSpottings().then((data) => setSpottings(data));
  }, []);

  return (
    <>
      <div className="spottings">
        <section className="spottings_cards">
          {spottings.map((spottings) => (
            <SpottingsCard key={spottings.id} spottings={spottings} />
          ))}
        </section>
      </div>
      <div className="center">
        <button
          className="create-spottings"
          onClick={() => {
            history.push({ pathname: "/spottings/create" });
          }}
        >
          Add Spottings
        </button>
      </div>
      {/* <div class="protect">
        <h5>***** Help us protect our local monsters! ****</h5>
      </div> */}
    </>
  );
};
