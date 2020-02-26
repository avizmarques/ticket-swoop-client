import React from "react";
import { Link } from "react-router-dom";

export default function TicketItem(props) {
  const { id, price, description, user, risk } = props.data;
  const color =
    risk <= 10 ? "#22ff00" : risk > 10 && risk <= 50 ? "#ffbb00" : "#ff0000";
  return (
    <div className="ticketItem">
      <div>{user.userName}</div>
      <div>€ {price}</div>
      <div>{description}</div>
      <div>
        Risk: {risk} %{" "}
        <div className="dot" style={{ backgroundColor: color }} />
      </div>
      <Link to={`/tickets/${id}`}>
        <button>More information</button>
      </Link>
    </div>
  );
}
