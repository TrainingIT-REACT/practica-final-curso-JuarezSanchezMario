import types from './types';

const songsLoading = () => ({
  type: types.LOADING_SONGS
});

const fetchSongsType = (songs) => ({
  type: types.FETCH_SONGS,
  songs
});
export const saveSongHistorico = song => ({
  type: types.SAVE_SONG_HISTORICO,
  song
});
const postError = () => ({
  type: types.ERROR_SONGS
});

const songsLoaded = () => ({
  type: types.LOADED_SONGS,
})

export const fetchSongs = () => async (dispatch) => {
  dispatch(songsLoading());
  try {
    const res = await fetch('http://localhost:3001/songs');
    const json = await res.json();
    dispatch(fetchSongsType(json));
    dispatch(songsLoaded());
  } catch {
    dispatch(postError());
  }
};

export const fetchByAlbum = (id) => async (dispatch) => {
  dispatch(songsLoading());
  try {
    const res = await fetch(`http://localhost:3001/songs?album_id=${id}`);
    const json = await res.json();
    dispatch(fetchSongsType(json));
    dispatch(songsLoaded());
  } catch {
    dispatch(postError());
  }
}
