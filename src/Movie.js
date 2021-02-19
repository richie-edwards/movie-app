import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlaceHolderImage from "../assets/movie_projector.jpg";

const Movie = ({ title, rating, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={PlaceHolderImage} />
      <Card.Body>
        <Card.Title>
          {title} ({rating})
        </Card.Title>
        <Card.Text>Movie summary.......</Card.Text>
        <Button variant="primary">Movie Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;
