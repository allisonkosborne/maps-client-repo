export const getSpecies = () => {
  return fetch("http://localhost:8000/species", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createSpecies = (newspecies) => {
  return fetch("http://localhost:8000/species", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newspecies),
  }).then(getSpecies);
};

export const getSpeciesById = (speciesId) => {
  return fetch(`http://localhost:8000/species/${speciesId}`, {
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
