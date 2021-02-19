import React, { useState, useEffect } from "react";
import MovieResults from "./MovieResults";

const SearchMoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState("");
  const [movieName, setMovieName] = useState("");

  // gets latest movies and sets them in state
  const getLatestMovies = () => {
    // get top 5 ordered by releaseYear desc
    MOVIES.sort((a, b) => {
      return b.releaseYear - a.releaseYear;
    });
    const latestFiveMovies = MOVIES.slice(0, 5);
    // setMovies with the results
    setMovies(latestFiveMovies);
  };

  // gets movies based on search
  const getMovies = () => {
    // get all movies based on search
    // setMovies with the results
  };

  const submitSearch = () => {};

  useEffect(() => {
    // get latest movies
    getLatestMovies();
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitSearch();
        }}
      >
        <label>Genre</label>
      </form>
      <MovieResults movies={movies} />
    </div>
  );
};

const MOVIES = [
  {
    id: 1,
    title: "10 things i hate about you",
    releaseYear: "1999",
    rating: 6.9,
    votes: 500,
    genres: ["comedy", "romance"],
  },
  {
    id: 2,
    title: "1492: conquest of paradise",
    releaseYear: "1992",
    rating: 6.2,
    votes: 10421,
    genres: ["adventure", "biography", "drama", "history"],
  },
  {
    id: 3,
    title: "15 minutes",
    releaseYear: "2001",
    rating: 6.1,
    votes: 25854,
    genres: ["action", "crime", "drama", "thriller"],
  },
  {
    id: 4,
    title: "2001: a space odyssey",
    releaseYear: "1968",
    rating: 8.4,
    votes: 163227,
    genres: ["adventure", "mystery", "sci-fi"],
  },
  {
    id: 5,
    title: "48 hrs.",
    releaseYear: "1982",
    rating: 6.9,
    votes: 22289,
    genres: ["action", "comedy", "crime", "drama", "thriller"],
  },
  {
    id: 6,
    title: "the fifth element",
    releaseYear: "1997",
    rating: 7.5,
    votes: 133756,
    genres: ["action", "adventure", "romance", "sci-fi", "thriller"],
  },
  {
    id: 7,
    title: "8mm",
    releaseYear: "1999",
    rating: 6.3,
    votes: 48212,
    genres: ["crime", "mystery", "thriller"],
  },
  {
    id: 8,
    title: "a nightmare on elm street 4: the dream master",
    releaseYear: 1988,
    rating: 5.2,
    votes: 13590,
    genres: ["fantasy", "horror", "thriller"],
  },
  {
    id: 9,
    title: "a nightmare on elm street: the dream child",
    releaseYear: 1989,
    rating: 4.7,
    votes: 11092,
    genres: ["fantasy", "horror", "thriller"],
  },
  {
    id: 10,
    title: "the atomic submarine",
    releaseYear: 1959,
    rating: 4.9,
    votes: 513,
    genres: ["sci-fi", "thriller"],
  },
  {
    id: 11,
    title: "affliction",
    releaseYear: 1997,
    rating: 6.9,
    votes: 7252,
    genres: ["drama", "mystery", "thriller"],
  },
  {
    id: 12,
    title: "air force one",
    releaseYear: 1997,
    rating: 6.3,
    votes: 61978,
    genres: ["action", "drama", "thriller"],
  },
  {
    id: 13,
    title: "airplane ii: the sequel",
    releaseYear: 1982,
    rating: 5.8,
    votes: 15210,
    genres: ["comedy", "romance", "sci-fi"],
  },
  {
    id: 14,
    title: "airplane!",
    releaseYear: 1980,
    rating: 7.8,
    votes: 57692,
    genres: ["comedy", "romance"],
  },
  {
    id: 15,
    title: "alien nation",
    releaseYear: 1988,
    rating: 6.1,
    votes: 5590,
    genres: ["crime", "drama", "sci-fi", "thriller"],
  },
  {
    id: 16,
    title: "aliens",
    releaseYear: 1986,
    rating: 8.5,
    votes: 173518,
    genres: ["action", "sci-fi", "thriller"],
  },
  {
    id: 17,
    title: "amadeus",
    releaseYear: 1984,
    rating: 8.4,
    votes: 99138,
    genres: ["biography", "drama", "music"],
  },
  {
    id: 18,
    title: "an american werewolf in london",
    releaseYear: 1981,
    rating: 7.5,
    votes: 24443,
    genres: ["horror", "romance"],
  },
  {
    id: 19,
    title: "american madness",
    releaseYear: 1932,
    rating: 7.4,
    votes: 702,
    genres: ["drama"],
  },
  {
    id: 20,
    title: "american outlaws",
    releaseYear: 2001,
    rating: 5.7,
    votes: 7425,
    genres: ["action", "western"],
  },
  {
    id: 21,
    title: "american psycho",
    releaseYear: 2000,
    rating: 7.4,
    votes: 101357,
    genres: ["drama", "thriller"],
  },
];

export default SearchMoviesContainer;
