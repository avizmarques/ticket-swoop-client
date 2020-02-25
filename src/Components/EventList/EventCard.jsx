import React from "react";
import { Link } from "react-router-dom";

export default function EventCard(props) {
  const { id, imageUrl, name, startDate, endDate } = props.data;

  return (
    <div className="eventCard">
      <Link to={`/events/${id}`}>
        <img src={imageUrl} alt={name} />
      </Link>
      <div>
        <div>{name}</div>
        <div>
          {startDate.slice(0, 10)} - {endDate.slice(0, 10)}
        </div>
      </div>
    </div>
  );
}
