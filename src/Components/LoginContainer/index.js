import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/actions";
import LoginForm from "./LoginForm";
import "./style.css";

class LoginContainer extends Component {
  state = {
    userName: "",
    password: "",
    loginFailed: false
  };

  onSubmit = async e => {
    try {
      e.preventDefault();
      await this.props.login(this.state);

      if (this.props.user.token) {
        this.props.history.push("/");
      } else {
        this.setState({ loginFailed: true });
      }
    } catch (err) {
      console.error(err);
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { userCreated, token } = this.props.user;
    return (
      <div className="loginForm">
        {this.state.loginFailed && (
          <p>Something went wrong, please provide valid credentials.</p>
        )}
        {userCreated && !token && <p>Signup successful, please login.</p>}
        {token ? (
          <p>You are already logged in</p>
        ) : (
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
