import React from "react";

export default function CommentForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name="text"
        placeholder="comment"
        value={props.text}
        onChange={e => props.onChange(e)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
