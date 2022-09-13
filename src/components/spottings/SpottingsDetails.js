import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteSpottings, getSpottingsById } from "./SpottingsManager";
import "./Spottings.css";

export const SpottingsDetails = () => {
  const history = useHistory();
  const params = useParams();
  const [spottingsId, setSpottingsId] = useState(parseInt(params.spottingsId));
  const [spottings, setSpottings] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSpottingsById(spottingsId).then((spottings) => {
      setSpottings(spottings);
    });
  }, []);

  const handleDeleteSpottings = (spottingsId) => {
    deleteSpottings(spottingsId).then(() => history.push("/spottings"));
  };

  return (
    <div className="spottings">
      <h3>Monster Spotting Details</h3>
      <div className="spottings-img-wrapper">
        {/* <img className="species-img" src={species.img_url} /> */}
      </div>
      <div className="spottings-info">
        {/* <p className="spottings-species">{spottings.species.name}</p> */}
        <p className="spottings-date">{spottings.date}</p>
        <p className="spottings-time">{spottings.time}</p>
        {/* <p className="spottings-location">{spottings.location.name}</p> */}
        {/* <p className="spottings-location">{locations.name}</p> */}
        {/* <p className="spottings-time">{species.time}</p>
        <p className="spottings-time">{species.time}</p> */}
        <button
          type="button"
          onClick={() => handleDeleteSpottings(spottings.id)}
        >
          Delete
        </button>
        <Link to={`/spottings/${spottings.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};
