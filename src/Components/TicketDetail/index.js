import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket, editTicket } from "../../store/ticket/actions";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";
import EditTicketForm from "./EditTicketForm";
import { postComment } from "../../store/ticket/actions";
import "./style.css";

class TicketDetail extends Component {
  state = {
    ticketId: parseInt(this.props.match.params.id),
    showForm: false,
    text: "",
    price: "",
    description: "",
    imageUrl: ""
  };

  componentDidMount = async () => {
    try {
      await this.props.loadTicket(this.state.ticketId);
      this.setState({
        price: this.props.ticket.price,
        description: this.props.ticket.description,
        imageUrl: this.props.ticket.imageUrl
      });
    } catch (err) {
      console.error(err);
    }
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

  submitChanges = async e => {
    e.preventDefault();
    try {
      await this.props.editTicket(this.state);
    } catch (err) {
      console.error(err);
    }
    this.setState({ showForm: false });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  displayEditForm = Form => {
    const { imageUrl, price, description } = this.props.ticket;

    if (this.state.showForm) {
      return (
        <Form
          submitChanges={this.submitChanges}
          onChange={this.onChange}
          values={this.state}
        />
      );
    }

    if (this.props.user.id === this.props.ticket.userId) {
      return (
        <div>
          <h2>€ {price}</h2>
          <img src={imageUrl} />
          <p>{description}</p>
          <button onClick={this.toggleForm}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>€ {price}</h2>
          <img src={imageUrl} />
          <p>{description}</p>
        </div>
      );
    }
  };

  render = () => {
    if (!this.props.ticket) {
      return "Loading...";
    }
    const { user, risk } = this.props.ticket;
    return (
      <div>
        <div>
          <h1>Ticket from {user.userName}</h1>
          <h2>Risk : {risk} %</h2>
          {this.displayEditForm(EditTicketForm)}
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

const mapDispatchToProps = { loadTicket, postComment, editTicket };

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
