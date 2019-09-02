import { ADD_MOVIE } from "../constants/action-types";

// movie list intial state
const movieList = [
  {
    title: "1984",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMWFkNzIzNDUtNWI1Mi00ODA2LTgyMTMtYTZiYWMxMDFlNmNhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,669,1000_AL_.jpg",
    rating: 5
  },
  {
    title: "Waking Life",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMWM0ZjY5ZjctODNkZi00Nzk0LWE1ODUtNGM4ZDUyMzUwMGYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: 4
  },
  {
    title: "Enter The Void",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMGQwMWRmODEtYzYwMy00MzFiLWJhYWUtNWNkNWM0NWZhODBiXkEyXkFqcGdeQXVyNjQyMjcwNDM@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
    rating: 4
  },
  {
    title: "Into The Wild",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_.jpg",
    rating: 4
  },
  {
    title: "Little Miss Sunshine",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    rating: 4
  },
  {
    title: "Requiem for a Dream",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    rating: 4
  },
  {
    title: "The Pursuit of Happyness",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
    rating: 4
  }
];

// movieList reducer
function movieReducer(state = movieList, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];

    // case SEARCH_MOVIE:
    //   return null;

    default:
      return state;
  }
}

export default movieReducer;

// // search initial state
// const searchTerm = 0;

// // searchTerm reducer
// export function searchReducer(state = searchTerm, action) {
//   switch (action.type) {
//     case SEARCH_MOVIE:
//       return null;

//     default:
//       return state;
//   }
// }
