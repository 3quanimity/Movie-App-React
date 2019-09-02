// Components
import React from "react";
// Style
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ButtonToolbar, Button, Modal, Form, Card, Col } from "react-bootstrap";
import "./AddMovie.css";
import plus from "../plus.png";

// React-bootstrap Modal with integrated form
function MyVerticallyCenteredModal(props) {
  // // handle submit
  // const handleSubmit = e => {
  //   // e.preventDefault();

  //   return {
  //     title: e.target.title.value,
  //     imgUrl: e.target.poster.value,
  //     rating: e.target.rating.value
  //   };
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add A Movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          className="flexinii"
          onSubmit={e => {
            props.trigger(e);
            props.onHide();
          }}
        >
          <Form.Group controlId="validationTitle">
            <Form.Label>Movie's Title</Form.Label>
            <Form.Control
              required
              name="title"
              type="text"
              placeholder="1984"
              // defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md="9" controlId="validationTitle">
              <Form.Label>Movie's Poster URL</Form.Label>
              <Form.Control
                required
                name="poster"
                type="text"
                placeholder="https://myMoviesPoster.png"
              />
              <Form.Text className="text-muted">
                We suggest shamelessly grabbing one directly from IMDb.
              </Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationId">
              <Form.Label>Select Rating</Form.Label>
              <Form.Control
                required
                name="rating"
                as="select"
                className="border-warning"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// AddMovie Card Component, the one triggering the form Modal
export default function AddMovie(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Card
        className="mb-2"
        style={{ width: "17rem" }}
        border="success"
        onClick={() => setModalShow(true)}
        // onClick={() => this.setState({ modalShow: true })}
      >
        <Card.Body className="Body">
          <img src={plus} className="mx-auto mt-auto mb-auto" alt="" />
        </Card.Body>

        <Card.Body>
          <Card.Title>Add A Movie</Card.Title>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        trigger={props.trigger}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
