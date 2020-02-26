import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEventDetail, createTicket } from "../../store/event/actions";
import TicketItem from "./TicketItem";
import AddTicketForm from "./AddTicketForm";
import { displayItems } from "../../App";
import { Link } from "react-router-dom";
import "./style.css";

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

    try {
      this.props.createTicket(this.state);
    } catch (err) {
      console.error(err);
    }

    this.setState({
      showForm: false,
      price: "",
      description: "",
      imageUrl: ""
    });
  };

  displayForm = Form => {
    if (this.props.user.token) {
      return (
        <div>
          <button onClick={this.toggleForm}>Add ticket</button>
          {this.state.showForm && (
            <Form
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Login</Link> to post a new ticket
        </div>
      );
    }
  };

  render = () => {
    if (!this.props.event) {
      return "Loading...";
    }

    const {
      name,
      imageUrl,
      description,
      startDate,
      endDate,
      tickets
    } = this.props.event;

    return (
      <div className="eventDetail">
        <h1>{name}</h1>
        <p>
          {startDate.slice(0, 10)} to {endDate.slice(0, 10)}
        </p>
        <img className="imageDetail" src={imageUrl} />
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
