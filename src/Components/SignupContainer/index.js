import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/user/actions";
import SignupForm from "./SignupForm";

class SignupContainer extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    signupFailed: false
  };

  onSubmit = async e => {
    e.preventDefault();
    try {
      await this.props.signup(this.state);
      if (this.props.user.userCreated) {
        this.props.history.push("/login");
      } else {
        this.setState({ signupFailed: true });
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
    return (
      <div className="signup">
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        {this.state.signupFailed && (
          <p>Signup failed, please provide valid credentials.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
