import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlaceHolderImage from "../assets/movie_projector.jpg";
import { Link } from "@reach/router";

const Movie = ({ title, rating, id, genres, releaseYear }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={PlaceHolderImage} />
      <Card.Body>
        <Card.Title>
          {title} ({rating})
        </Card.Title>
        <Card.Text>genre: {genres.toString().replaceAll(",", ", ")}</Card.Text>
        <Card.Text>released: {releaseYear}</Card.Text>
        <Link to={`/details/${id}`}>
          <Button onClick={() => {}} variant="primary">
            Movie Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Movie;
