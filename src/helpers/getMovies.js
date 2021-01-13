export const getMovies = async function (searchTerm) {
  const apiKey = "6394ca94";
  const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((error) => {
      throw new Error(error);
    });
};
