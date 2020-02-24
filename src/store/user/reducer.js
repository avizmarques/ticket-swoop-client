import { LOGIN_SUCCESS } from "./actions";

const initialState = {
  token: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.token };
    default:
      return state;
  }
}
