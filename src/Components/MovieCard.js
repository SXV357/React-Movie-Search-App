import React from "react";

export default function MovieCard({
  poster_path,
  original_title,
  overview,
  release_date,
}) {
  return (
    <div className="movie-card">
      <figure>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        ></img>
      </figure>
      <div className="info">
        <h1>{original_title}</h1>
        <p>{overview}</p>
        <p>Release Date: {release_date}</p>
      </div>
    </div>
  );
}
