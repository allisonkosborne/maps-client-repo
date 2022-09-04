// const remoteURL = "http://localhost:8000";

export const getSpecies = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createSpecies = (species) => {
  return fetch("http://localhost:8000/species", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(species),
  }).then((res) => res.json());
};
