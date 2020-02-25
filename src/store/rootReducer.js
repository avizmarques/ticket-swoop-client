import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import eventReducer from "./event/reducer";
import ticketReducer from "./ticket/reducer";

export default combineReducers({
  user: userReducer,
  events: eventReducer,
  ticket: ticketReducer
});
