import React from "react";

export default function CommentCard(props) {
  const { text, createdAt } = props.data;
  return (
    <div className="commentCard">
      <div>Username</div>
      <div>on {createdAt.slice(0, 10)}</div>
      <div>{text}</div>
    </div>
  );
}
