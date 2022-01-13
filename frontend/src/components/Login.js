import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    props.login(user);
  };
  return (
    <div className="container">
      {/* <form>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </form> */}
      <form>
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
            className="btn btn-primary d-block"
            type="submit"
            value="Login"
            onClick={loginUser}
          >
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Have An Account
          </Link>
        </div>
      </form>
    </div>
  );
}
