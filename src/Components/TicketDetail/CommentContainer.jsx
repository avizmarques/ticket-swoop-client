import React, { Component } from "react";
import { displayItems } from "../../App";
import CommentCard from "./CommentCard";

export default function CommentContainer(props) {
  return (
    <div>
      <h2>Comments</h2>
      {props.comments.length
        ? displayItems(props.comments, CommentCard)
        : "No comments for this ticket."}
    </div>
  );
}
