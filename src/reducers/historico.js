import types from '../actions/types';
import { combineReducers } from "redux";


// Estado inicial
const initialState = {
  historico: {
    albums:[],
    songs:[],
  }
};
export const getAlbums = state => state.historico.albums;
export const getSongs = state => state.historico.songs;

const albums = (state = initialState.historico.albums, action) => {
  if(action.type === types.SAVE_ALBUM_HISTORICO){
    let historico = {albums: [...state,{id:action.album}]};
    return historico.slice(-5);
  } else return state;
};
const songs = (state = initialState.historico.songs, action) => {
  let historico = {songs: [...state,{id:action.songs}]};
  if(action.type === types.SAVE_SONG_HISTORICO){
    return historico.slice(-5);
  } else return state;
};

const reducerCombinedHistorico = combineReducers({
  albums,
  songs,
});
export default reducerCombinedHistorico;