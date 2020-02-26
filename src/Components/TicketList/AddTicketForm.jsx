import React from "react";

export default function AddEventForm(props) {
  const { price, imageUrl, description } = props.values;
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name="price"
        placeholder="price"
        value={price}
        onChange={e => props.onChange(e)}
      />
      <input
        name="description"
        type="text"
        placeholder="description"
        value={description}
        onChange={e => props.onChange(e)}
      />
      <input
        name="imageUrl"
        placeholder="image URL"
        value={imageUrl}
        onChange={e => props.onChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
