import React, { useState } from 'react';
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
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input type="submit" value="Register" onClick={registerUser} />
      </form>
    </div>
  );
}
