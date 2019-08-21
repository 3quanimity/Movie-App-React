import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";

export default function MovieCard(props) {
  return (
    <Card className="mb-3" border="primary" style={{ width: "17rem" }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body className="flexini">
        <Card.Title className="d-inline">{props.title} </Card.Title>
        <StarRatingComponent
          name="rate2"
          //   editing={false}
          starCount={5}
          value={props.rating}
        />
      </Card.Body>
    </Card>
  );
}
