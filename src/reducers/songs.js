import types from '../actions/types';
import { combineReducers } from "redux";


// Estado inicial
const initialState = {
  songs: {
    loading: false,
    songs:[],
  }
};

export const getLoading = state => state.songs.loading;
export const getAlbums = state => state.songs.songs;

const songs = (state = initialState.songs.songs, action) => {
  if(action.type === types.FETCH_SONGS){
    return action.songs;
  } else{
    return state;
  }
};

const loading = (state = initialState.songs.loading, action) => {
  switch (action.type) {
    case types.LOADING_SONGS:
      return true
    case types.LOADED_SONGS:
      return false
    default: return state;
  }
};

const reducerCombinedSong = combineReducers({
  loading,
  songs,
});
export default reducerCombinedSong;
