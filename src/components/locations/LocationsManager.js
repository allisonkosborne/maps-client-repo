export const getLocations = () => {
  return fetch("http://localhost:8000/locations", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createLocations = (location) => {
  return fetch("http://localhost:8000/locations", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  }).then((res) => res.json());
};

export const getLocationById = (locationId) => {
  return fetch(`http://localhost:8000/locations/${locationId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((res) => res.json());
};
