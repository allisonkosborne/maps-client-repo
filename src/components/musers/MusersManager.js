export const getMusers = () => {
  return fetch("http://localhost:8000/users", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json());
};
