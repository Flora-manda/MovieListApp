import axios from "axios";

export const getMovies = async function (searchTerm) {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.Search)
    .catch((error) => {
      throw new Error(error);
    });
};
