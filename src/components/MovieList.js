import React from "react";
import noImage from "./no_image.jpg";

export default function MovieList(props) {
  const NominateComponent = props.nominateComponent;

  return (
    <div>
      {props.movies?.map((movie, index) => (
        <div key={index}>
          <img
            src={movie.Poster === "N/A" ? noImage : movie.Poster}
            alt={movie.Title}
          ></img>
          <div onClick={() => props.handleNominateClick(movie)}>
            <NominateComponent />
          </div>
        </div>
      ))}
    </div>
  );
}
