import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchMovies from "./Components/SearchMovies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SearchMovies />
  </React.StrictMode>
);
