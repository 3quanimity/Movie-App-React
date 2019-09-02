import React from "react";
import { Container, Form, FormControl, Button, Navbar } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RatingSelector from "./RatingSelector";
import logo from "../logo.svg";
import "./Header.css";
import { searchMovie } from "../js/actions/index";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return { searchMovie: search => dispatch(searchMovie(search)) };
};

function connectedHeader(props) {
  const grabSearch = e => {
    e.preventDefault();
    let search = {
      title: e.target.search.value,
      rating: e.target.rate1.value
    };
    props.searchMovie(search);
    // console.log(props.searchMovie);
  };

  return (
    <Navbar sticky="top" className="navbar navbar-dark bg-dark mb-4">
      <Container>
        <div className="estwini">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="navbar-brand">
            Movie <span className="text-info">App</span>
          </h2>
        </div>

        <Form inline onSubmit={grabSearch}>
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

const Header = connect(
  null,
  mapDispatchToProps
)(connectedHeader);
export default Header;
