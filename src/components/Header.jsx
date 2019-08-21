import React from "react";
import { Container, Form, FormControl, Button, Navbar } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RatingSelector from "./RatingSelector";
import logo from "../logo.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <Navbar sticky="top" className="navbar navbar-dark bg-dark mb-4">
      <Container>
        <div className="estwini">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="navbar-brand">
            Movie <span className="text-info">App</span>
          </h2>
        </div>

        <Form inline onSubmit={props.trigger}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            name="search"
          />
          <RatingSelector />
          <Button variant="outline-info" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
