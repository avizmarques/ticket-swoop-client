import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEventDetail, createTicket } from "../../store/event/actions";
import TicketItem from "./TicketItem";
import AddTicketForm from "./AddTicketForm";
import { displayItems } from "../../App";

export class TicketList extends Component {
  state = {
    eventId: parseInt(this.props.match.params.id),
    showForm: false,
    ticketCreationFailed: false,
    price: "",
    imageUrl: "",
    description: ""
  };

  componentDidMount = () => {
    this.props.loadEventDetail(this.state.eventId);
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const initialNumTickets =
      this.props.event.tickets === 0 ? 0 : this.props.event.tickets.length;

    try {
      this.props.createTicket(this.state);
    } catch (err) {
      console.error(err);
    }

    const numTicketsAfter =
      this.props.event.tickets === 0 ? 0 : this.props.event.tickets.length;

    if (initialNumTickets === numTicketsAfter) {
      this.setState({ ticketCreationFailed: true });
    } else {
      this.setState({
        showForm: false,
        price: "",
        description: "",
        imageUrl: ""
      });
    }
  };

  displayForm = Form => {
    if (this.props.user.token) {
      return (
        <div>
          <button onClick={this.toggleForm}>Add ticket</button>
          {this.state.showForm && this.state.ticketCreationFailed && (
            <p>
              Something went wrong. Make sure you're logged in and that you're
              providing all necessary information.
            </p>
          )}
          {this.state.showForm && (
            <Form
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
          )}
        </div>
      );
    }
  };

  render = () => {
    if (!this.props.event) {
      return "Loading...";
    }

    const { name, description, startDate, endDate, tickets } = this.props.event;

    return (
      <div>
        <h1>{name}</h1>
        <p>
          {startDate.slice(0, 10)} - {endDate.slice(0, 10)}
        </p>
        <p>{description}</p>
        {this.displayForm(AddTicketForm)}
        <div className="ticketList">
          {tickets
            ? displayItems(tickets, TicketItem)
            : "No tickets for this event"}
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  event: state.events.event,
  user: state.user
});

const mapDispatchToProps = { loadEventDetail, createTicket };

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
