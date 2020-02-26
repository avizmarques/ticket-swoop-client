import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <form onSubmit={props.onSubmit}>
        <input
          name="userName"
          placeholder="username"
          value={props.values.userName}
          onChange={e => props.onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={props.values.password}
          onChange={e => props.onChange(e)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Not a member yet?</p>
      <Link to="/signup">Create an account ></Link>
    </div>
  );
}
