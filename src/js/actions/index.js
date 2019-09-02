import { ADD_MOVIE, SEARCH_MOVIE } from "../constants/action-types";

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}

export function searchMovie(payload) {
  return { type: SEARCH_MOVIE, payload };
}
