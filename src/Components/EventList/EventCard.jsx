import React from "react";

export default function EventCard(props) {
  const { imageUrl, name, startDate, endDate } = props.data;

  return (
    <div className="eventCard" key={props.key}>
      <img src={imageUrl} alt={name} />
      <div>
        <div>{name}</div>
        <div>
          {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
}
