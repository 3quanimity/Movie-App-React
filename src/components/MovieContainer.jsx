import React, { Component } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./MovieContainer.css";
import LoaderHOC from "../HOC/LoaderHOC";
import { connect } from "react-redux";
import { addMovie } from "../js/actions/index";

/****pay attention here ****/
function mapDispatchToProps(dispatch) {
  return { addMovie: newMovie => dispatch(addMovie(newMovie)) };
}
// or
// const mapDispatchToProps= {
// addMovie:(newMovie)=>addMovie(newMovie)
// }

const mapStateToProps = state => {
  return { movieList: state.movieReducer, search: state.searchReducer };
};

class connectedMovieContainer extends Component {
  constructor(props) {
    super();
  }
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   movieList: [
  //     {
  //       title: "1984",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMWFkNzIzNDUtNWI1Mi00ODA2LTgyMTMtYTZiYWMxMDFlNmNhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,669,1000_AL_.jpg",
  //       rating: 5
  //     },
  //     {
  //       title: "Waking Life",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMWM0ZjY5ZjctODNkZi00Nzk0LWE1ODUtNGM4ZDUyMzUwMGYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //       rating: 4
  //     },
  //     {
  //       title: "Enter The Void",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMGQwMWRmODEtYzYwMy00MzFiLWJhYWUtNWNkNWM0NWZhODBiXkEyXkFqcGdeQXVyNjQyMjcwNDM@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
  //       rating: 4
  //     },
  //     {
  //       title: "Into The Wild",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_.jpg",
  //       rating: 4
  //     },
  //     {
  //       title: "Little Miss Sunshine",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
  //       rating: 4
  //     },
  //     {
  //       title: "Requiem for a Dream",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  //       rating: 4
  //     },
  //     {
  //       title: "The Pursuit of Happyness",
  //       imgUrl:
  //         "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
  //       rating: 4
  //     }
  //   ]
  // };
  // }

  // handle submit
  handleSubmit = e => {
    e.preventDefault();

    let newMovie = {
      title: e.target.title.value,
      imgUrl: e.target.poster.value,
      rating: e.target.rating.value
    };

    this.props.addMovie(newMovie);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="movieContainer">
        {this.props.movieList
          .filter(
            el =>
              el.title
                .toLowerCase()
                .includes(this.props.search.title.toLowerCase()) &&
              Number(el.rating) >= Number(this.props.search.rating)
          )
          .map((el, index) => (
            <MovieCard
              key={index}
              title={el.title}
              imgUrl={el.imgUrl}
              rating={el.rating}
            />
          ))}
        <AddMovie trigger={this.handleSubmit} />
      </div>
    );
  }
}

const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedMovieContainer);

export default LoaderHOC(MovieContainer);
