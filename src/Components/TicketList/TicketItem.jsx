import React from "react";

export default function TicketItem(props) {
  const { price, description, user } = props.data;
  return (
    <div className="ticketItem">
      <div>{user.userName}</div>
      <div>€ {price}</div>
      <div>{description}</div>
    </div>
  );
}
