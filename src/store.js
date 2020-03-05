import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


// Reducers
import albums from "./reducers/albums";
import historico from "./reducers/historico";
import songs from "./reducers/songs";
import user from "./reducers/user";

export default createStore(
  combineReducers({albums, historico, songs, user}),
  composeWithDevTools(applyMiddleware(thunk))
);
