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
    const pageNum = this.props.match.params.page
      ? parseInt(this.props.match.params.page)
      : 1;

    e.preventDefault();

    try {
      await this.props.createEvent(this.state, pageNum);
    } catch (err) {
      console.error(err);
    }

    this.setState({
      showForm: false,
      name: "",
      description: "",
      imageUrl: "",
      startDate: "",
      endDate: ""
    });
  };

  displayForm = Form => {
    if (this.props.user.token) {
      return (
        <div className="hiddenForm">
          <button onClick={this.toggleForm}>Add event</button>
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
        <div className="hiddenForm">
          <Link to="/login">Login</Link> to post a new event
        </div>
      );
    }
  };

  render = () => {
    if (!this.props.events.length) {
      return "Loading...";
    }

    const currentPage = this.props.params
      ? parseInt(this.props.params.page)
      : 1;

    return (
      <div>
        <PageNav
          currentPage={currentPage}
          countEvents={this.props.countEvents}
        />
        <div>{this.displayForm(AddEventForm, "event")}</div>
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
  user: state.user
});

const mapDispatchToProps = { loadEvents, createEvent };

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
