import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Film = ({ Movie, handledelete, handleseen }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Movie.image} />
        <Card.Body>
          <Card.Title>{Movie.name}</Card.Title>
          <Card.Title>{Movie.date}</Card.Title>

          <Card.Text>{Movie.description}</Card.Text>
          <button onClick={(e) => handleseen(Movie.id)}>
            {Movie.seen ? "seen" : "unseen"}
          </button>
          <Button variant="primary" onClick={() => handledelete(Movie.id)}>
            delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Film;
