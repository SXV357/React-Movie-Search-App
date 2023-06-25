import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch(err => console.log(`An error occurred when fetching the data for ${query}. Error: ${err}`))
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie, idx) => {
          return movie.original_title &&
          movie.overview &&
          movie.release_date &&
          movie.poster_path && (
          <MovieCard key={idx} movie={movie} />)
        })}
      </div>
    </div>
  );
}