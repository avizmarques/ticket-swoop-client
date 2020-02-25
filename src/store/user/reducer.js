import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName
      };
    case SIGNUP_SUCCESS:
      return state;
    default:
      return state;
  }
}
