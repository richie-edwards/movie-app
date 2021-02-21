import React, { useState, useEffect } from "react";
import { movie, MOVIES } from "./data/Movies";
import MovieResults from "./MovieResults";
import useDropdown from "./useDropdown";
import useRange from "./useRange";

const SearchMoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [genre, GenreDropdown] = useDropdown("Genre:", "", movie.genres());
  const [yearRange, YearComponent] = useRange("Release Year:", 1998, 2000);
  const [ratingRange, RatingComponent] = useRange("Rating", 0, 10);

  // gets movies based on search
  const getMovies = () => {
    // get all movies based on search
    // setMovies with the results
    console.log(
      "submitted",
      "genre",
      genre,
      "range",
      yearRange,
      "rating",
      ratingRange
    );
    const movies = movie.getMovies({ genre, yearRange, ratingRange });
    setMovies(movies);
  };

  useEffect(() => {
    setMovies(movie.getLatestMovies());
  }, []);

  return (
    <div className="search-container">
      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getMovies();
          }}
        >
          <GenreDropdown />
          {YearComponent}
          {RatingComponent}
          <button type="submits">Search</button>
        </form>
      </div>
      <MovieResults movies={movies} />
    </div>
  );
};

export default SearchMoviesContainer;
