import axios from "axios";
import { baseUrl } from "../../App";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_DETAIL_FETCHED = "EVENT_DETAIL_FETCHED";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_TICKET_SUCCESS = "CREATE_TICKET_SUCCESS";

const eventsFetched = data => ({
  type: EVENTS_FETCHED,
  payload: data
});

export const loadEvents = pageNum => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/event`, {
      params: { page: pageNum }
    });
    dispatch(eventsFetched(res.data));
  } catch (err) {
    console.error(err);
  }
};

const eventDetailFetched = data => ({
  type: EVENT_DETAIL_FETCHED,
  payload: data
});

export const loadEventDetail = eventId => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/event/${eventId}`);
    dispatch(eventDetailFetched(res.data));
  } catch (err) {
    console.error(err);
  }
};

const eventCreated = data => ({
  type: CREATE_EVENT_SUCCESS,
  payload: data
});

export const createEvent = data => async (dispatch, getState) => {
  try {
    const token = getState().user.token;
    const res = await axios.post(`${baseUrl}/event`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const numOfEventsInPage = getState().events.allEvents.length;

    if (numOfEventsInPage < 9) {
      return dispatch(eventCreated(res.data));
    }

    return;
  } catch (err) {
    console.error(err);
  }
};

const ticketCreated = data => ({
  type: CREATE_TICKET_SUCCESS,
  payload: data
});

export const createTicket = data => async (dispatch, getState) => {
  const { eventId, price, imageUrl, description } = data;

  try {
    const token = getState().user.token;
    const res = await axios.post(
      `${baseUrl}/event/${eventId}/ticket`,
      { price, imageUrl, description },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    dispatch(ticketCreated(res.data));
  } catch (err) {
    console.error(err);
  }
};
