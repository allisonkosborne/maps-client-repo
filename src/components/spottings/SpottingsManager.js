export const getSpottings = () => {
  return fetch("http://localhost:8000/spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};

export const createSpottings = (spotting) => {
  return fetch("http://localhost:8000/spottings/create", {
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
