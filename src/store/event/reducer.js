import { EVENTS_FETCHED, EVENT_DETAIL_FETCHED } from "./actions";

const initialState = {
  allEvents: [],
  event: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return { ...state, allEvents: action.payload };
    case EVENT_DETAIL_FETCHED:
      return {
        ...state,
        event: { ...action.payload.event, tickets: action.payload.tickets }
      };
    default:
      return state;
  }
}
