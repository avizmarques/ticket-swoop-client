import React from "react";

export default function CommentCard(props) {
  const { text, createdAt, user } = props.data;
  return (
    <div className="commentCard">
      <div>{text}</div>
      <h3>by {user.userName}</h3>
      <div className="commentTime">on {createdAt.slice(0, 10)}</div>
    </div>
  );
}
