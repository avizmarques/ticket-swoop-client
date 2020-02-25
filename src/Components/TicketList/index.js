import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEventDetail } from "../../store/event/actions";
import TicketItem from "./TicketItem";
import { displayItems } from "../../App";

export class TicketList extends Component {
  state = {
    eventId: parseInt(this.props.match.params.id)
  };

  componentDidMount = () => {
    this.props.loadEventDetail(this.state.eventId);
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
        <div className="ticketList">
          {tickets
            ? displayItems(tickets, TicketItem)
            : "No tickets for this event"}
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({ event: state.events.event });

const mapDispatchToProps = { loadEventDetail };

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
