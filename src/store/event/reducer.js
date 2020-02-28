import {
  EVENTS_FETCHED,
  EVENT_DETAIL_FETCHED,
  CREATE_EVENT_SUCCESS,
  CREATE_TICKET_SUCCESS
} from "./actions";

const initialState = {
  allEvents: [],
  countEvents: null,
  createEventSuccess: false,
  event: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return {
        ...state,
        allEvents: action.payload.rows,
        countEvents: action.payload.count
      };
    case EVENT_DETAIL_FETCHED:
      return {
        ...state,
        event: { ...action.payload.event, tickets: action.payload.tickets }
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        allEvents: action.payload.rows,
        countEvents: action.payload.count,
        createEventSuccess: true
      };
    case CREATE_TICKET_SUCCESS:
      return { ...state, event: { ...state.event, tickets: action.payload } };
    default:
      return state;
  }
}
