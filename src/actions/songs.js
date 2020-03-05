import types from './types';

const songsLoading = () => ({
  type: types.LOADING_SONGS
});

const fetchSongs = () => ({
  type: types.FETCH_SONGS
});

const postError = () => ({
  type: types.ERROR_SONGS
});

const songsLoaded = (posts) => ({
  type: types.LOADED_ALBUMS,
  songs
})

export const fetchSongs = () => async (dispatch) => {
  dispatch(songsLoading());
  try {
    const res = await fetch('http://localhost:3001/songs');
    const json = await res.json();
    dispatch(fetchSongs(json));
  } catch {
    dispatch(postError());
  }
};

export const fetchByAlbum = (id) => async (dispatch,id) => {
  dispatch(songsLoading());
  try {
    const res = await fetch(`http://localhost:3001/songs?album_id=${id}`);
    const json = await res.json();
    dispatch(songsLoaded(json));
  } catch {
    dispatch(postError());
  }
}
