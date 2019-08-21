import React, { Component } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import { Container } from "react-bootstrap";

// import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Container style={{ padding: "0" }} className="App">
          <MovieContainer />
        </Container>
      </>
    );
  }
}
