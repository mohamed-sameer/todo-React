import React, { useState } from 'react';

export default function Login(props) {
  const [email, setEmail] = useState('a@a.com');
  const [password, setPassword] = useState('123');

  const loginUser = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    props.login(user);
  };
  return (
    <div>
      <form>
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
        <input type="submit" value="Login" onClick={loginUser} />
      </form>
    </div>
  );
}
