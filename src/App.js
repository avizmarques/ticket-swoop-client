import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EventList from "./Components/EventList";
import TicketList from "./Components/TicketList";
import "./style.css";

export const baseUrl = "http://localhost:4000";
// export const baseUrl = INSERT HEROKU URL

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
      <Route path="/events/:id" component={TicketList} />
      {/* <Route exact path="/login" component={LoginForm} /> */}
    </div>
  );
}

export default App;
