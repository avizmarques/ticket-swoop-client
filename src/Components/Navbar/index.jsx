import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">ticketswoop</div>
      </Link>
      <Link to="/login">
        <button className="whiteButton">Login</button>
      </Link>
    </div>
  );
}
