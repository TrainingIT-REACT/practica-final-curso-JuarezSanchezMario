import types from './types';

const albumLoading = () => ({
  type: types.LOADING_ALBUMS
});
const postError = () => ({
  type: types.ERROR_ALBUMS
});
const fetchAlbumType = (albums) => ({
  type: types.FETCH_ALBUMS,
  albums
})
const albumsLoaded = () => ({
  type: types.LOADED_ALBUMS,
})
const albumLoaded = () => ({
  type: types.LOADED_ALBUM,
})
export const saveAlbumHistorico = (id) => ({
  type: types.LOADED_ALBUMS,
  id
})
export const fetchAlbums = () => async (dispatch) => {
  dispatch(albumLoading());
  try {
    const res = await fetch('http://localhost:3001/albums');
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumsLoaded());
  } catch {
    dispatch(postError());
  }
};
export const fetchAlbum = (id) => async (dispatch) => {
  dispatch(albumLoading());
  try {
    const res = await fetch(`http://localhost:3001/albums?id=${id}`);
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumsLoaded());
  } catch {
    dispatch(postError());
  }
};
export const fetchFilteredByName = (name) => async (dispatch) => {
  dispatch(albumLoading());
  try {
    const res = await fetch(`http://localhost:3001/albums?name_like=${name}`);
    const json = await res.json();
    dispatch(fetchAlbumType(json));
    dispatch(albumLoaded());
  } catch {
    dispatch(postError());
  }
};
export const fetchFilteredByArtist = (artist) => async (dispatch) => {
  dispatch(albumLoading());
  try {
    const res = await fetch(`http://localhost:3001/albums?artist_like=${artist}`);
    const json = await res.json();
    dispatch(albumLoaded(json));
  } catch {
    dispatch(postError());
  }
};


