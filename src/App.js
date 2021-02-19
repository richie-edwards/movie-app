import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchMoviesContainer from "./SearchMoviesContainer";

const App = () => {
  return (
    <div id="container">
      <Router>
        <SearchMoviesContainer path="/" />
        {/* <MovieDetails path="/details/:id" /> */}
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
