import React from "react";
import { Link } from "react-router-dom";

export default function TicketItem(props) {
  const { id, price, description, user, risk } = props.data;
  return (
    <div className="ticketItem">
      <div>{user.userName}</div>
      <div>€ {price}</div>
      <div>{description}</div>
      <div>Risk: {risk} %</div>
      <Link to={`/tickets/${id}`}>
        <button>More information</button>
      </Link>
    </div>
  );
}
