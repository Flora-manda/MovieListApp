import React, { useState, useEffect } from "react";
import { Loading } from "carbon-components-react";
import "./App.scss";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";
import SearchInput from "./components/SearchInput";
import { getMovies } from "./helpers/getMovies";
import useDebounce from "./hooks/useDebounce";
import AddNomination from "./components/AddNomination";
import RemoveNomination from "./components/RemoveNomination";

function App() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [nominations, setNominations] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  // asyn request to fetch list of movies from OMDB API
  useEffect(() => {
    getMovies(debouncedSearchTerm);
    if (debouncedSearchTerm) {
      setLoading(true);
      getMovies(debouncedSearchTerm).then((results) => {
        setLoading(false);
        setListOfMovies(results);
      });
    } else {
      setListOfMovies([]);
    }
  }, [debouncedSearchTerm]);

  // handler function to nominate movie
  const addNominatedMovie = (movie) => {
    const nominationList = [...nominations, movie];
    setNominations(nominationList);
  };
  // handler function to remove nominated movie
  const removeNominatedMovie = (movie) => {
    const nominationList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominations(nominationList);
  };

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          <div>
            <Heading heading="The Shoppies: Movie awards for entrepreneurs" />
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
          {loading ? (
            <Loading
              description="Active loading indicator"
              withOverlay={false}
            />
          ) : (
            <MovieList
              movies={listOfMovies}
              nominateComponent={AddNomination}
              handleNominateClick={addNominatedMovie}
            />
          )}
        </div>
        <div>
          <Heading heading="Nominations" />
          <MovieList
            movies={nominations}
            nominateComponent={RemoveNomination}
            handleNominateClick={removeNominatedMovie}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
