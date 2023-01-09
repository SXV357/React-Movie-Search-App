import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = (event) => {
    event.preventDefault();
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data);
        });
    } catch {
      throw new Error();
    }
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
            movie.poster_path ? (
            <MovieCard
              key={idx}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
              overview={movie.overview}
              release_date={movie.release_date}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
