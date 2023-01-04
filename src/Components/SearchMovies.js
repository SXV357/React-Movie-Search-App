import React from "react";

export default function SearchMovies() {
  const searchMovie = async (e) => {
    e.preventDefault();

    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
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
        ></input>
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}
