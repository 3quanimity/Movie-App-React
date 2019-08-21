import React, { Component } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import { Container } from "react-bootstrap";

// import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        title: "",
        rating: ""
      }
    };
  }

  grabSearch = e => {
    e.preventDefault();

    // let search = {
    //   title: e.target.search.value,
    //   rating: e.target.rate1.value
    // };
    // console.log(search);

    this.setState({
      search: {
        title: e.target.search.value,
        rating: e.target.rate1.value
      }
    });

    // console.log(this.state);
  };

  render() {
    return (
      <>
        <Header trigger={this.grabSearch} />
        <Container style={{ padding: "0" }} className="App">
          <MovieContainer search={this.state.search} />
        </Container>
      </>
    );
  }
}
