import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchMoviesContainer from "./SearchMoviesContainer";

const App = () => {
  return (
    <div id="container">
      <div id="header">
        <nav>
          <ul id="header-menus">
            <Link to="/">Search</Link>
            <Link to="/Dashboard">Dashboard</Link>
          </ul>
        </nav>
        <button>Login</button>
      </div>
      <Router>
        <SearchMoviesContainer path="/" />
        {/* <MovieDetails path="/details/:id" /> */}
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
