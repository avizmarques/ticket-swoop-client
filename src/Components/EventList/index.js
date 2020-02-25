import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents, createEvent } from "../../store/event/actions";
import EventCard from "./EventCard";
import { displayItems } from "../../App";
import "./style.css";
import { Link } from "react-router-dom";
import AddEventForm from "./AddEventForm";

export class EventList extends Component {
  state = {
    showForm: false,
    name: "",
    description: "",
    imageUrl: "",
    startDate: "",
    endDate: ""
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createEvent(this.state);
  };

  componentDidMount = () => {
    this.props.loadEvents();
  };

  render = () => {
    return (
      <div>
        <div>
          <div>Next page</div>
          <button onClick={this.toggleForm}>Add event</button>
          {this.state.showForm && (
            <AddEventForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
          )}
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

const mapDispatchToProps = { loadEvents, createEvent };

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
