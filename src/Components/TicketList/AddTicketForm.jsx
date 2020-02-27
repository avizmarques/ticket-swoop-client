import React from "react";
import { Link } from "react-router-dom";

export default function AddEventForm(props) {
  if (!props.token) {
    return (
      <div>
        <Link to="/login">Login</Link> to post a new ticket
      </div>
    );
  }

  const { price, imageUrl, description } = props.values;
  return (
    <div>
      <button onClick={props.toggleForm}>Add ticket</button>
      <form onSubmit={props.onSubmit}>
        <input
          name="price"
          placeholder="price"
          value={price}
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
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
