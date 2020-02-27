import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EventList from "./Components/EventList";
import TicketList from "./Components/TicketList";
import TicketDetail from "./Components/TicketDetail";
import LoginContainer from "./Components/LoginContainer";
import SignupContainer from "./Components/SignupContainer";
import "./style.css";

export const baseUrl = "http://localhost:4000";

export const displayItems = (items, Component) => {
  return !items
    ? "Loading..."
    : items.map((item, i) => <Component data={item} key={i} />);
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={EventList} />
      <Route path="/eventlist/:page" component={EventList} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route path="/events/:id" component={TicketList} />
      <Route path="/tickets/:id" component={TicketDetail} />
    </div>
  );
}

export default App;
