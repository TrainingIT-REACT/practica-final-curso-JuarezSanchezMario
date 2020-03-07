// Definimos la lista de acciones
const actions = [
  // ALBUMS
  "GET_ALBUMS",
  "FETCH_ALBUMS",
  "FETCH_ALBUM",
  "LOADING_ALBUMS",
  "LOADED_ALBUMS",
  "SELECTED_ALBUM",
  "ERROR_ALBUMS",
  "SAVE_ALBUM_HISTORICO",

  //SONGS
  "FETCH_SONGS",
  "LOADING_SONGS",
  "LOADED_SONGS",
  "GET_SONGS",
  "SAVE_ALBUM_SONGS",
  "SAVE_SONG_HISTORICO",


  // Usuarios
  "UPDATE_USER",
  "DELETE_USER"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
