import { LOGIN_SUCCESS } from "./actions";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName
      };
    default:
      return state;
  }
}
