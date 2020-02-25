import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket } from "../../store/ticket/actions";
import CommentContainer from "./CommentContainer";
import "./style.css";

class TicketDetail extends Component {
  state = {
    ticketId: parseInt(this.props.match.params.id)
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
        <CommentContainer
          ticketId={this.state.ticketId}
          comments={this.props.ticket.comments}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({ ticket: state.ticket });

const mapDispatchToProps = { loadTicket };

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
