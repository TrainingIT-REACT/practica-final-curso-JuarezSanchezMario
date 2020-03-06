import types from "../actions/types";
import { combineReducers } from "redux";

// Estado inicial
const initialState = {
  albums: {
    loading: false,
    albums: [],
    selectedAlbum: {},
    recomendados: []
  }
};
export const getLoading = state => state.albums.loading;
export const getAlbums = state => state.albums.albums;
export const getRecomendados = state => state.albums.recomendados;
export const getSelectedAlbum = state => state.albums.selectedAlbum;

const albums = (state = initialState.albums.albums, action) => {
  if (action.type === types.FETCH_ALBUMS) {
    return action.albums;
  } else {
    return state;
  }
};
const selectedAlbum = (state = initialState.albums.selectedAlbum, action) => {
  if (action.type === types.SELECTED_ALBUM) {
    return action.album;
  } else {
    return state;
  }
};
const recomendados = (state = initialState.albums.recomendados, action) => {
  if (state.length > 0 && action.type === types.FETCH_ALBUMS) {
    const n = 5;
    const sample = action.albums
      .map(x => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map(a => a.x)
      .slice(0, n);
    return sample;
  } else {
    return state;
  }
};
const loading = (state = initialState.albums.loading, action) => {
  switch (action.type) {
    case types.LOADING_ALBUMS:
      return true;
    case types.LOADED_ALBUMS:
      return false;
    default:
      return state;
  }
};

// Implementamos el reducer
const reducerCombinedAlbum = combineReducers({
  albums,
  loading,
  recomendados,
  selectedAlbum
});
export default reducerCombinedAlbum;
