import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EventList from "./Components/EventList";
import "./style.css";

export const baseUrl = "http://localhost:4000";
// export const baseUrl = INSERT HEROKU URL

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={EventList} />
      {/* <Route exact path="/login" component={LoginForm} /> */}
    </div>
  );
}

export default App;
