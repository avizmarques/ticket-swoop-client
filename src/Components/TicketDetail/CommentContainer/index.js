import React, { Component } from "react";
import { connect } from "react-redux";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { postComment } from "../../../store/ticket/actions";
import { Link } from "react-router-dom";

export class CommentContainer extends Component {
  state = {
    ticketId: this.props.ticketId,
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.postComment(this.state.ticketId, this.state.text);
    this.setState({
      text: ""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    if (!this.props.user.token) {
      return (
        <div>
          <p>
            <Link to="/login">Login</Link> to post a new comment
          </p>
          <h2>Comments</h2>
          <CommentList
            ticketId={this.state.ticketId}
            comments={this.props.ticket.comments}
          />
        </div>
      );
    }

    return (
      <div>
        <CommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          text={this.state.text}
        />
        <CommentList
          ticketId={this.state.ticketId}
          comments={this.props.ticket.comments}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({ ticket: state.ticket, user: state.user });

const mapDispatchToProps = { postComment };

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
