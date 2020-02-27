import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEventDetail, createTicket } from "../../store/event/actions";
import TicketItem from "./TicketItem";
import AddTicketForm from "./AddTicketForm";
import { displayItems } from "../../App";
import "./style.css";
import EventDetail from "./EventDetail";

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
      await this.props.createTicket(this.state);
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

  render = () => {
    if (!this.props.event) {
      return "Loading...";
    }

    const { tickets } = this.props.event;

    return (
      <div className="eventDetail">
        <EventDetail event={this.props.event} />
        <AddTicketForm
          token={this.props.user.token}
          toggleForm={this.toggleForm}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
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
