import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/user/actions";

class LoginForm extends Component {
  state = {
    userName: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({ userName: "", password: "" });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input
            name="userName"
            placeholder="username"
            value={this.state.userName}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <button type="submit">Login</button>
        </form>
        <p>Not a member yet?</p>
        <Link to="/signup">Create an account ></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ token: state.token });

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
