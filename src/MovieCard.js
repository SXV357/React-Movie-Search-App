import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <figure>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        ></img>
      </figure>
      <div className="info">
        <h1 className="movie-title">{movie.original_title}</h1>
        <p className="movie-description">{movie.overview}</p>
        <div className="movie-statistics">
          <p className="release-date">Release Date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}
