import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div>ticketswoop</div>
      <Link to="login">Login</Link>
    </div>
  );
}
