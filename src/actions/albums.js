import types from "./types";

const albumLoading = () => ({
  type: types.LOADING_ALBUMS
});
const postError = () => ({
  type: types.ERROR_ALBUMS
});
const fetchAlbumType = albums => ({
  type: types.FETCH_ALBUMS,
  albums
});
const albumsLoaded = () => ({
  type: types.LOADED_ALBUMS
});
export const savedSelectedAlbum = album => ({
  type: types.SELECTED_ALBUM,
  album
});
export const fetchAlbums = () => async dispatch => {
  dispatch(albumLoading());
  try {
    const res = await fetch("http://localhost:3001/albums");
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumsLoaded());
  } catch(e){
    console.log(e);
    dispatch(postError());
    dispatch(albumsLoaded());
  }
};
export const fetchAlbum = id => async dispatch => {
  dispatch(albumLoading());
  try {
    const res = await fetch(`http://localhost:3001/albums?id=${id}`);
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumsLoaded());
  } catch(e) {
    console.log(e);
    dispatch(postError());
    dispatch(albumsLoaded());
  }
};
export const fetchFilteredByName = name => async dispatch => {
  dispatch(albumLoading());
  try {
    const res = await fetch(`http://localhost:3001/albums?name_like=${name}`);
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumsLoaded());
  } catch(e) {
    console.log(e);
    dispatch(postError());
    dispatch(albumsLoaded());
  }
};
export const fetchFilteredByArtist = artist => async dispatch => {
  dispatch(albumLoading());
  try {
    const res = await fetch(
      `http://localhost:3001/albums?artist_like=${artist}`
    );
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumsLoaded());
  } catch(e) {
    console.log(e);
    dispatch(postError());
    dispatch(albumsLoaded());
  }
};
