import React, { useState, useEffect } from "react";
import { Loading } from "carbon-components-react";
import "./App.scss";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";
import SearchInput from "./components/SearchInput";
import { getMovies } from "./helpers/getMovies";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
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
            <MovieList movies={listOfMovies} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
