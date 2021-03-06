import React from "react";
import { Link } from "react-router-dom";

export default function AddEventForm(props) {
  if (!props.token) {
    return (
      <div className="hiddenForm">
        <Link to="/login">Login</Link> to post a new event
      </div>
    );
  }

  const {
    name,
    description,
    imageUrl,
    startDate,
    endDate,
    showForm
  } = props.values;

  return (
    <div className="hiddenForm">
      <button onClick={props.toggleForm}>Add event</button>
      {showForm && (
        <form onSubmit={props.onSubmit}>
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={e => props.onChange(e)}
            required
          />
          <input
            name="description"
            type="text"
            placeholder="description"
            value={description}
            onChange={e => props.onChange(e)}
            required
          />
          <input
            name="imageUrl"
            placeholder="image URL"
            value={imageUrl}
            onChange={e => props.onChange(e)}
            required
          />
          Start Date
          <input
            name="startDate"
            type="date"
            value={startDate}
            onChange={e => props.onChange(e)}
            required
          />
          End Date
          <input
            name="endDate"
            type="date"
            value={endDate}
            onChange={e => props.onChange(e)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
