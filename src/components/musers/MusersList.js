import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getMusers } from "./MusersManager.js";
import { MusersCard } from "./MusersCard.js";
import "./Musers.css";
import "../Maps.css";

export const MusersList = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getMusers().then((data) => setMusers(data));
  }, []);

  return (
    <>
      <div className="musers">
        <section className="musers_cards">
          {users.map((users) => (
            <MusersCard key={users.id} users={users} />
          ))}
        </section>
      </div>
      <div className="center">
        <button
          className="btn"
          onClick={() => {
            history.push({ pathname: "/users/new" });
          }}
        >
          Add User
        </button>
      </div>
    </>
  );
};
