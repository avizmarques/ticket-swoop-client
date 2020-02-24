import axios from "axios";
import { baseUrl } from "../../App";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_DETAIL_FETCHED = "EVENT_DETAIL_FETCHED";

const eventsFetched = data => ({
  type: EVENTS_FETCHED,
  payload: data
});

export const loadEvents = () => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/event`);
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
