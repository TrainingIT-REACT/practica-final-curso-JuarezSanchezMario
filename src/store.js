import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


// Reducers
import albums from "./reducers/albums";
import historico from "./reducers/historico";
import songs from "./reducers/songs";
import user from "./reducers/user";

export const initialState = {
  albums: {
    albums: [
      {
        id: 1,
        name: 'Chip off the old block',
        artist: 'Blair',
        cover: '/images/cover.jpg'
      },
      {
        id: 2,
        name: 'Battle grounds',
        artist: 'Florian',
        cover: '/images/cover.jpg'
      },
      {
        id: 3,
        name: 'Decisions decisions',
        artist: 'Skylar',
        cover: '/images/cover.jpg'
      },
      {
        id: 4,
        name: 'Blank canvas',
        artist: 'Skylar',
        cover: '/images/cover.jpg'
      },
      {
        id: 5,
        name: 'Ice cold',
        artist: 'Kimberley',
        cover: '/images/cover.jpg'
      },
      {
        id: 6,
        name: 'Honesty',
        artist: 'Ted Garrett',
        cover: '/images/cover.jpg'
      },
      {
        id: 7,
        name: 'Creative director',
        artist: 'Delaney',
        cover: '/images/cover.jpg'
      },
      {
        id: 8,
        name: 'No guarantees',
        artist: 'Kimberley',
        cover: '/images/cover.jpg'
      },
      {
        id: 9,
        name: 'Don\'t push this button',
        artist: 'Delaney',
        cover: '/images/cover.jpg'
      },
      {
        id: 10,
        name: 'Cherry',
        artist: 'Stacy',
        cover: '/images/cover.jpg'
      }
    ],
    loading: false,
    recomendados: [
      {
        id: 8,
        name: 'No guarantees',
        artist: 'Kimberley',
        cover: '/images/cover.jpg'
      },
      {
        id: 9,
        name: 'Don\'t push this button',
        artist: 'Delaney',
        cover: '/images/cover.jpg'
      },
      {
        id: 1,
        name: 'Chip off the old block',
        artist: 'Blair',
        cover: '/images/cover.jpg'
      },
      {
        id: 7,
        name: 'Creative director',
        artist: 'Delaney',
        cover: '/images/cover.jpg'
      },
      {
        id: 2,
        name: 'Battle grounds',
        artist: 'Florian',
        cover: '/images/cover.jpg'
      }
    ],
    selectedAlbum: {
      id: 5,
      name: 'Ice cold',
      artist: 'Kimberley',
      cover: '/images/cover.jpg'
    }
  },
  historico: {
    albums: [
      {
        id: 1,
        name: 'Chip off the old block',
        artist: 'Blair',
        cover: '/images/cover.jpg'
      },
      {
        id: 5,
        name: 'Ice cold',
        artist: 'Kimberley',
        cover: '/images/cover.jpg'
      }
    ],
    songs: [
      {
        id: 1,
        name: 'Take On Me',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 1
      },
      {
        id: 2,
        name: 'S.O.S.',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 1
      }
    ]
  },
  songs: {
    loading: false,
    songs: [
      {
        id: 21,
        name: 'Back In Black',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 5
      },
      {
        id: 22,
        name: 'Rock and Roll Ain\'t Noise Pollution',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 5
      },
      {
        id: 23,
        name: 'Dirty Deeds Done Dirt Cheap',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 5
      },
      {
        id: 24,
        name: 'Whole Lotta Rosie',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 5
      },
      {
        id: 25,
        name: 'Let There Be Rock',
        audio: '/music/funky_energy_loop.mp3',
        seconds: 203,
        album_id: 5
      }
    ]
  },
  user: {
    name: 'Mario',
    email: 'mjs.mariojuarezsanchez@gmail.com',
    logged: true
  }
}

export default createStore(
  combineReducers({albums, historico, songs, user}),
  composeWithDevTools(applyMiddleware(thunk))
);
