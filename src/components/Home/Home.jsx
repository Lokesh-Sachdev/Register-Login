import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

function Home() {
  const history = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('email');
    let users = JSON.parse(localStorage.getItem('users'));
    const check = users.filter((item) => item.email == userData);
    setUser(check[0]);
  }, []);
  console.log(user);
  const logout = () => {
    localStorage.setItem('isLogIn', false);
    history('/login');
  };
  return (
    <div className="home">
      <h1>Login Successfully</h1>
      <p> {user?.name}</p>
      <p> {user?.contact}</p>
      <p> {user?.email}</p>
      <p> {user?.gender}</p>
      <div>
        {user?.hobbies?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Home;
