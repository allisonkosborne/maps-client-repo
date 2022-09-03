export const getSpottings = () => {
  return fetch("http://localhost:8000/spottings", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
