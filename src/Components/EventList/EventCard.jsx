import React from "react";
import { Link } from "react-router-dom";

export default function EventCard(props) {
  const { id, imageUrl, name, startDate, endDate } = props.data;

  return (
    <div className="eventCard">
      <Link to={`/events/${id}`}>
        <img className="eventImg" src={imageUrl} alt={name} />
      </Link>
      <div className="eventDescription">
        <h3>{name}</h3>
        <div>
          {startDate.slice(0, 10)} to {endDate.slice(0, 10)}
        </div>
      </div>
    </div>
  );
}
