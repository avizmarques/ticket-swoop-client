import React from "react";

export default function EditTicketForm(props) {
  const { price, description, imageUrl } = props.values;
  return (
    <form onSubmit={props.submitChanges}>
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
