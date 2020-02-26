import {
  EVENTS_FETCHED,
  EVENT_DETAIL_FETCHED,
  CREATE_EVENT_SUCCESS
} from "./actions";

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
    case CREATE_EVENT_SUCCESS: {
      const endDate = Date.parse(action.payload.endDate);
      const now = new Date();

      return endDate < now
        ? state
        : { ...state, allEvents: [...state.allEvents, action.payload] };
    }

    default:
      return state;
  }
}
