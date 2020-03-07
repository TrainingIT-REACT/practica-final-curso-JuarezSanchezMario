import types from "../actions/types";

// Estado inicial
const initialState = {
  user: {
    name: "",
    email: "",
    logged: false
  }
};

export const getUser = state => state.user;

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      console.log(action)
      return { name: action.user.user.name, email:  action.user.user.email, logged: true };
    case types.DELETE_USER:
      return { name: "", email: "", logged: false };
    default:
      return state;
  }
};

export default reducer;
