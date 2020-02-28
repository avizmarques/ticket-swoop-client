import React from "react";
import { Link } from "react-router-dom";

export default function SignupForm(props) {
  return (
    <div className="loginForm">
      <h1>Create an account</h1>
      <form onSubmit={props.onSubmit}>
        <input
          name="userName"
          placeholder="username"
          value={props.values.userName}
          onChange={e => props.onChange(e)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={props.values.email}
          onChange={e => props.onChange(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={props.values.password}
          onChange={e => props.onChange(e)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}
