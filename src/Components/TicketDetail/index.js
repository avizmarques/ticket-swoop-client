import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket } from "../../store/ticket/actions";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";
import { postComment } from "../../store/ticket/actions";
import "./style.css";

class TicketDetail extends Component {
  state = {
    ticketId: parseInt(this.props.match.params.id),
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

  componentDidMount = () => {
    this.props.loadTicket(this.state.ticketId);
  };

  render = () => {
    if (!this.props.ticket) {
      return "Loading...";
    }
    const { imageUrl, price, description, user, risk } = this.props.ticket;
    return (
      <div>
        <div>
          <h1>Ticket from {user.userName}</h1>
          <h2>Risk : {risk} %</h2>
          <h2>€ {price}</h2>
          <img src={imageUrl} />
          <p>{description}</p>
        </div>
        <div>
          <h2>Comments</h2>
          {this.props.user.token && (
            <CommentForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              text={this.state.text}
            />
          )}
          <CommentContainer
            ticketId={this.state.ticketId}
            comments={this.props.ticket.comments}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({ ticket: state.ticket, user: state.user });

const mapDispatchToProps = { loadTicket, postComment };

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
