import axios from "axios";
import { baseUrl } from "../../App";

export const TICKET_FETCHED = "TICKET_FETCHED";

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
