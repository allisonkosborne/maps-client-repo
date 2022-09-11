export const getSpottings = () => {
  return fetch("http://localhost:8000/spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createSpottings = (spotting) => {
  return fetch("http://localhost:8000/spottings", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spotting),
  }).then((res) => res.json());
};

export const getSpottingsById = (spottingsId) => {
  return fetch(`http://localhost:8000/spottings/${spottingsId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((res) => res.json());
};

const updateSpottings = (id, spottings) => {
  return fetch(`http://localhost:8000/spottings/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spottings),
  });
};

export const deleteSpottings = (spottingsId) => {
  return fetch(`http://localhost:8000/spottings/${spottingsId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
};
