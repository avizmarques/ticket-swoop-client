import React from "react";

export default function CommentCard(props) {
  const { text, createdAt, user } = props.data;
  return (
    <div className="commentCard">
      <div>{text}</div>
      <div>by {user.userName}</div>
      <div>on {createdAt.slice(0, 10)}</div>
    </div>
  );
}
