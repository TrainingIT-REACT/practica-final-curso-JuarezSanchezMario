// Definimos la lista de acciones
const actions = [
  // ALBUMS
  "GET_ALBUMS",
  "FETCH_ALBUMS",
  "LOADING_ALBUMS",
  "LOADED_ALBUMS",

  //SONGS
  "FETCH_SONGS",
  "LOADING_SONGS",
  "LOADED_SONGS",
  "GET_SONGS",

  // Usuarios
  "UPDATE_NAME"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
