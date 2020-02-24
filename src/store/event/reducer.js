import { EVENTS_FETCHED } from "./actions";

const initialState = {
  allEvents: [],
  event: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return { ...state, allEvents: action.payload };
    default:
      return state;
  }
}
