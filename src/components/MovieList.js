import React from "react";
import noImage from "./no_image.jpg";

export default function MovieList(props) {
  return (
    <div>
      {props.movies?.map((movie, index) => (
        <div key={index}>
          <img
            src={movie.Poster === "N/A" ? noImage : movie.Poster}
            alt={movie.Title}
          ></img>
        </div>
      ))}
    </div>
  );
}
