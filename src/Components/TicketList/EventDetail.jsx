import React from "react";

export default function EventDetail(props) {
  const { name, imageUrl, description, startDate, endDate } = props.event;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {startDate.slice(0, 10)} to {endDate.slice(0, 10)}
      </p>
      <img className="imageDetail" src={imageUrl} alt={description} />
      <p>{description}</p>
    </div>
  );
}
