export const getSpecies = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createSpecies = (newSpecies) => {
  return fetch("http://localhost:8000/species", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSpecies),
  });
};

export const getSpeciesById = (id) => {
  return fetch(`http://localhost:8000/species/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((res) => res.json());
};

const updateSpecies = (id, species) => {
  return fetch(`http://localhost:8000/species/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(species),
  });
};
