import React from "react";

export default function AddEventForm(props) {
  const { name, description, imageUrl, startDate, endDate } = props.values;
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name="name"
        placeholder="name"
        value={name}
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
      Start Date
      <input
        name="startDate"
        type="date"
        value={startDate}
        onChange={e => props.onChange(e)}
      />
      End Date
      <input
        name="endDate"
        type="date"
        value={endDate}
        onChange={e => props.onChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}