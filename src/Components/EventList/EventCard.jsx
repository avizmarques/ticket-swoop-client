import React from "react";

export default function EventCard(props) {
  const { imageUrl, name, startDate, endDate } = props.data;

  return (
    <div className="eventCard">
      <img src={imageUrl} alt={name} />
      <div>
        <div>{name}</div>
        <div>
          {startDate.slice(0, 10)} - {endDate.slice(0, 10)}
        </div>
      </div>
    </div>
  );
}
