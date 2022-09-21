const headers = {
  Accept: "application/json",
};

export const getAll = async () =>
  await fetch(`http://localhost:3005/content`, { headers })
    .then((res) => res.json())
    .then((data) => data);
