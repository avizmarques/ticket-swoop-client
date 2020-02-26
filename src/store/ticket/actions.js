import axios from "axios";
import { baseUrl } from "../../App";

export const TICKET_FETCHED = "TICKET_FETCHED";
export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS";
export const CREATE_TICKET_SUCCESS = "CREATE_TICKET_SUCCESS";
export const EDIT_TICKET_SUCCESS = "EDIT_TICKET_SUCCESS";

const ticketFetched = data => ({
  type: TICKET_FETCHED,
  payload: data
});

export const loadTicket = ticketId => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/ticket/${ticketId}`);
    dispatch(ticketFetched(res.data));
  } catch (err) {
    console.error(err);
  }
};

const commentPosted = data => ({
  type: COMMENT_POST_SUCCESS,
  payload: data
});

export const postComment = (ticketId, text) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      `${baseUrl}/ticket/${ticketId}/comment`,
      { text },
      { headers: { Authorization: `Bearer ${getState().user.token}` } }
    );
    dispatch(commentPosted(res.data));
  } catch (err) {
    console.error(err);
  }
};

const ticketEdited = data => ({
  type: EDIT_TICKET_SUCCESS,
  payload: data
});

export const editTicket = data => async (dispatch, getState) => {
  const { ticketId, price, description, imageUrl } = data;
  try {
    const res = await axios.put(
      `${baseUrl}/ticket/${ticketId}`,
      { price, description, imageUrl },
      {
        headers: { Authorization: `Bearer ${getState().user.token}` }
      }
    );
    console.log(res.data[1][0]);
    dispatch(ticketEdited(res.data[1][0]));
  } catch (err) {
    console.error(err);
  }
};
