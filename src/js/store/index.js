import { combineReducers, createStore } from "redux";
import movieReducer from "../reducers/movieReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  movieReducer,
  searchReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
