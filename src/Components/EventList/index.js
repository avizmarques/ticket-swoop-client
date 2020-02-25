import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents } from "../../store/event/actions";
import EventCard from "./EventCard";
import { displayItems } from "../../App";
import "./style.css";

export class EventList extends Component {
  componentDidMount = () => {
    this.props.loadEvents();
  };

  render = () => {
    return (
      <div>
        <div>
          <div>Next page</div>
        </div>
        <div className="eventList">
          {displayItems(this.props.events, EventCard)}
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  events: state.events.allEvents
});

const mapDispatchToProps = { loadEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventList);