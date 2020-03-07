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
  if(action.type === types.UPDATE_USER){
    return [];
  }
  if(action.type === types.SELECTED_ALBUM){
    let historico = [...state,action.album];
    return historico.slice(-5);
  } else return state;
};
const songs = (state = initialState.historico.songs, action) => {
  if(action.type === types.UPDATE_USER){
    return [];
  }
  if(action.type === types.SAVE_SONG_HISTORICO){
    let historico = [...state,action.song];
    return historico.slice(-5);
  } else return state;
};

const reducerCombinedHistorico = combineReducers({
  albums,
  songs,
});
export default reducerCombinedHistorico;