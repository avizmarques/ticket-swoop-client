import React from "react";
import { displayItems } from "../../../App";
import CommentCard from "./CommentCard";

export default function CommentList(props) {
  return (
    <div className="commentList">
      {props.comments.length
        ? displayItems(props.comments, CommentCard)
        : "No comments for this ticket."}
    </div>
  );
}
