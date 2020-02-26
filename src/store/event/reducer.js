import {
  EVENTS_FETCHED,
  EVENT_DETAIL_FETCHED,
  CREATE_EVENT_SUCCESS,
  CREATE_TICKET_SUCCESS
} from "./actions";

const initialState = {
  allEvents: [],
  countEvents: null,
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
    case CREATE_EVENT_SUCCESS: {
      const endDate = Date.parse(action.payload.endDate);
      const now = new Date();

      return endDate < now
        ? state
        : { ...state, allEvents: [...state.allEvents, action.payload] };
    }
    case CREATE_TICKET_SUCCESS:
      return state.event.tickets
        ? {
            ...state,
            event: {
              ...state.event,
              tickets: [
                ...state.event.tickets,
                {
                  ...action.payload.ticket,
                  user: { userName: action.payload.userName }
                }
              ]
            }
          }
        : {
            ...state,
            event: {
              ...state.event,
              tickets: [
                {
                  ...action.payload.ticket,
                  user: { userName: action.payload.userName }
                }
              ]
            }
          };
    default:
      return state;
  }
}
