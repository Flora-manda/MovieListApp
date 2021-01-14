import React from "react";
import noImage from "./no_image.jpg";

export default function MovieList(props) {
  const NominateComponent = props.nominateComponent;

  return (
    <div>
      {props.movies?.map((movie, index) => {
        return (
          <div key={index} className="movie-list-row">
            <div className="img-container">
              <img
                className="img-box"
                src={movie.Poster === "N/A" ? noImage : movie.Poster}
                alt={movie.Title}
              ></img>
            </div>
            <div className="movie-list-row-content">
              <div>
                <div className="movie-list-title">{movie.Title}</div>
                <div className="movie-list-year">
                  Year released: {movie.Year}
                </div>
              </div>
              <div onClick={() => props.handleNominateClick(movie)}>
                <NominateComponent />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
