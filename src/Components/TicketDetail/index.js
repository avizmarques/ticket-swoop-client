import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTicket, editTicket } from "../../store/ticket/actions";
import EditTicketForm from "./EditTicketForm";
import CommentContainer from "./CommentContainer/index";
import "./style.css";

class TicketDetail extends Component {
  state = {
    ticketId: parseInt(this.props.match.params.id),
    showForm: false,
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
      return <button onClick={this.toggleForm}>Edit</button>;
    }
  };

  render = () => {
    if (!this.props.ticket) {
      return "Loading...";
    }
    const { user, risk, price, description } = this.props.ticket;

    return (
      <div className="ticketDetail">
        <div>
          <h1>Ticket from {user.userName}</h1>
          <h2>Risk : {risk} %</h2>
          <h2>€ {price}</h2>
          <h3>Description</h3>
          <p>{description}</p>
          {this.displayEditForm(EditTicketForm)}
        </div>
        <CommentContainer ticketId={this.state.ticketId} />
      </div>
    );
  };
}

const mapStateToProps = state => ({ ticket: state.ticket, user: state.user });

const mapDispatchToProps = { loadTicket, editTicket };

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);
