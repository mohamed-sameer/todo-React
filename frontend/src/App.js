import { useState } from 'react';
import axios from 'axios';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Todo from './components/Todo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const loginDetails = { message: loginMessage, status: loginStatus };
  const registerUser = (body) => {
    axios
      .post('http://localhost:5000/users/register', body)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  const login = (body) => {
    axios
      .post('http://localhost:5000/users/login', body)
      .then((response) => {
        // console.log(response.status);
        const username = response.data.userInfo.username;
        setLoginStatus(response.status);
        setLoginMessage(response.data.message);
        setIsLoggedIn(true);
        setUsername(username);
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus(err.response.status);
        setLoginMessage(err.response.data.message);
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            TODO List
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <button onClick={logout} className="btn btn-secondary">
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <h1>Welcome: {username}</h1>
      {/* <Todo /> */}
      <Routes>
        {/* protect routes */}
        {isLoggedIn && <Route path="/" element={<Todo />} />}
        {!isLoggedIn && (
          <>
            <Route
              path="login"
              element={<Login login={login} loginDetails={loginDetails} />}
            />

            <Route
              path="register"
              element={<Register registerUser={registerUser} />}
            />
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? '/' : '/login'} />}
        />
      </Routes>
    </div>
  );
}

export default App;
