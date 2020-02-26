import React, { Component } from "react";
import { connect } from "react-redux";
import { loadEvents, createEvent } from "../../store/event/actions";
import EventCard from "./EventCard";
import { displayItems } from "../../App";
import "./style.css";
import AddEventForm from "./AddEventForm";
import { Link } from "react-router-dom";

export class EventList extends Component {
  state = {
    showForm: false,
    eventCreationFailed: false,
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
    const numEvents = this.props.events.length;

    try {
      await this.props.createEvent(this.state);
    } catch (err) {
      console.error(err);
    }

    if (this.props.events.length === numEvents) {
      this.setState({ eventCreationFailed: true });
    } else {
      this.setState({
        showForm: false,
        name: "",
        description: "",
        imageUrl: "",
        startDate: "",
        endDate: ""
      });
    }
  };

  displayForm = Form => {
    if (this.props.user.token) {
      return (
        <div>
          <button onClick={this.toggleForm}>Add event</button>
          {this.state.showForm && this.state.eventCreationFailed && (
            <p>
              Something went wrong. Make sure you're logged in and that the
              event you're trying to create doesn't already exist and isn't in
              the past.
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
    const nextPage = this.props.match.params.page
      ? parseInt(this.props.match.params.page) + 1
      : 2;
    return (
      <div>
        <div>
          <div>
            <Link to={`/eventlist/${nextPage}`}>Next page</Link>
          </div>
          {this.displayForm(AddEventForm)}
        </div>
        <div className="eventList">
          {displayItems(this.props.events, EventCard)}
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  events: state.events.allEvents,
  user: state.user
});

const mapDispatchToProps = { loadEvents, createEvent };

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
