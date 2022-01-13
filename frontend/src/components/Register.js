import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';
export default function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      username: userName,
    };
    props.registerUser(newUser);
  };
  return (
    <div className="container">
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="user name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="floatingInput">User name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="mt-3" align="center">
          <button
            type="submit"
            className="btn btn-primary d-block"
            onClick={registerUser}
          >
            Register
          </button>
          <Link to="/login" className="btn btn-link">
            Don't Have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}
