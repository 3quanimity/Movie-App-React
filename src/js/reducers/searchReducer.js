import { SEARCH_MOVIE } from "../constants/action-types";

let search = {
  title: "",
  rating: ""
};

export default function searchReducer(state = search, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
