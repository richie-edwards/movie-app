import React from "react";
import Movie from "./Movie";

const MovieResults = ({ movies }) => {
  return (
    <div className="search-results">
      {movies.map((movie) => {
        return (
          <Movie
            title={movie.title}
            rating={movie.rating}
            key={movie.title.replace(" ", "-")}
            id={movie.id}
            releaseYear={movie.releaseYear}
            genres={movie.genres}
          />
        );
      })}
    </div>
  );
};

export default MovieResults;
