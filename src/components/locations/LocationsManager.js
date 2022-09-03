export const getLocations = () => {
  return fetch("http://localhost:8000/locations", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
