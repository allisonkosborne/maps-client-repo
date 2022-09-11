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

export const updateLocations = (id, locations) => {
  return fetch(`http://localhost:8000/locations/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(locations),
  });
};

export const deleteLocations = (locationsId) => {
  return fetch(`http://localhost:8000/locations/${locationsId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
};
