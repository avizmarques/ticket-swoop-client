import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        id: action.payload.id
      };
    case SIGNUP_SUCCESS:
      return { ...state, userCreated: true };
    default:
      return state;
  }
}
