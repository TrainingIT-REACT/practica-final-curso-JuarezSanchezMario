import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducers
import albums from "./reducers/albums";
import historico from "./reducers/albums";
import songs from "./reducers/albums";
import user from "./reducers/albums";

export default createStore(
  combineReducers(albums, historico, songs, user),
  applyMiddleware(thunk)
);
