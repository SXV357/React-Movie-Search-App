import React from "react";

export default function SearchMovies() {
  const searchMovie = (event) => {
    event.preventDefault();

    const query = "John Wick";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch {
      throw new Error();
    }
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => searchMovie(e)}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search Movies"
        ></input>
        <button className="button">Search</button>
      </form>
    </div>
  );
}
