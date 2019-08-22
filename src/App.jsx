import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import { Container } from "react-bootstrap";

// import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        title: "",
        rating: ""
      },
      isLoading: true
    };
  }

  // simulate loading
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  grabSearch = e => {
    e.preventDefault();

    this.setState({
      search: {
        title: e.target.search.value,
        rating: e.target.rate1.value
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Header trigger={this.grabSearch} />
        <Container style={{ padding: "0" }} className="App">
          <MovieContainer
            search={this.state.search}
            isLoading={this.state.isLoading}
          />
        </Container>
      </Fragment>
    );
  }
}

export default App;
