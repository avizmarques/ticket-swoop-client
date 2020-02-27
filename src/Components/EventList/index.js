import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents, createEvent } from "../../store/event/actions";
import EventCard from "./EventCard";
import { displayItems } from "../../App";
import "./style.css";
import AddEventForm from "./AddEventForm";
import PageNav from "./PageNav";
import { Link } from "react-router-dom";

export class EventList extends Component {
  state = {
    showForm: false,
    createEventFailed: false,
    pageNum: null,
    name: "",
    description: "",
    imageUrl: "",
    startDate: "",
    endDate: ""
  };

  componentDidMount = () => {
    const pageNum = this.props.match.params.page
      ? parseInt(this.props.match.params.page)
      : 1;

    this.setState({ pageNum });
    this.props.loadEvents(pageNum);
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
      await this.props.createEvent(this.state, this.state.pageNum);
    } catch (err) {
      console.error(err);
    }

    if (this.props.createEventSuccess) {
      this.setState({
        showForm: false,
        createEventFailed: false,
        name: "",
        description: "",
        imageUrl: "",
        startDate: "",
        endDate: ""
      });
    } else {
      this.setState({
        createEventFailed: true
      });
    }
  };

  render = () => {
    if (!this.props.events.length) {
      return "Loading...";
    }

    return (
      <div>
        <PageNav
          currentPage={this.state.pageNum}
          countEvents={this.props.countEvents}
        />
        <AddEventForm
          token={this.props.user.token}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          toggleForm={this.toggleForm}
        />
        {this.state.createEventFailed && (
          <p>Something went wrong, please provide correct information.</p>
        )}
        <div className="eventList">
          {displayItems(this.props.events, EventCard)}
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  events: state.events.allEvents,
  countEvents: state.events.countEvents,
  createEventSuccess: state.events.createEventSuccess,
  user: state.user
});

const mapDispatchToProps = { loadEvents, createEvent };

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
