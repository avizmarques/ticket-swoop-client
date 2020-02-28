import React from "react";
import { Link } from "react-router-dom";

export default function TicketItem(props) {
  const { id, price, description, user, risk } = props.data;
  const color =
    risk <= 10 ? "#22ff00" : risk > 10 && risk <= 50 ? "#ffbb00" : "#ff0000";
  return (
    <div className="ticketItem">
      <div className="cell">{user.userName}</div>
      <div className="cell">€ {price}</div>
      <div className="cell">{description}</div>
      <div className="cell">
        <div className="dot" style={{ backgroundColor: color }}>
          {risk} %
        </div>
      </div>
      <div className="cell">
        <Link to={`/tickets/${id}`}>+ Info</Link>
      </div>
    </div>
  );
}
