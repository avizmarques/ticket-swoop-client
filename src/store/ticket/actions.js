import axios from "axios";
import { baseUrl } from "../../App";

export const TICKET_FETCHED = "TICKET_FETCHED";
export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS";

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
