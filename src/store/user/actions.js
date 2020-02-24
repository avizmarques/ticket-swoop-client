import axios from "axios";
import { baseUrl } from "../../App";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const login = data => async dispatch => {
  const { userName, email, password } = data;
  try {
    const res = await axios.post(`${baseUrl}/login`, {
      userName,
      email,
      password
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error(err);
  }
};
