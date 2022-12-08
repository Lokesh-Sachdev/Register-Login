import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const initialState = {
    email: '',
    password: '',
  };
  const history = useNavigate();
  const [data, setData] = useState(initialState);

  function handleLogin(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      console.log('users', users);
      const result = users?.filter(
        (item) => item.email == data.email && item.password == data.password
      );
      if (result?.length > 0) {
        localStorage.setItem('isLogIn', true);
        localStorage.setItem('email', data.email);
        history(`/home`);
      } else {
        alert('PLease Register Yourself!');
        history('/');
      }
    } else {
      alert('No Record Found');
    }
  }

  return (
    <div className="login__container">
      <form onSubmit={handleLogin}>
        <h3>LogIn</h3>
        <div className="form-group">
          <p>Email</p>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <p>Password</p>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
