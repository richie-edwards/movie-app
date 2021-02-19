import React from "react";
import Movie from "./Movie";

const MovieResults = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <Movie
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
            key={movie.title.replace(" ", "-")}
          />
        );
      })}
    </div>
  );
};

export default MovieResults;
