import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const initialState = {
    name: '',
    email: '',
    contact: '',
    gender: '',
    hobbies: '',
    country: '',
    password: '',
    flag: false,
  };
  const history = useNavigate();
  const [data, setData] = useState(initialState);

  const handleHobby = (hobby) => {
    console.log(hobby);
    const arr = data.hobbies ? data.hobbies : [];
    arr.push(hobby);
    setData({ ...data, hobbies: arr });
  };

  const login = () => {
    localStorage.setItem('isLogIn', false);
    history('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name &&
      data.email &&
      data.contact &&
      data.contact &&
      data.gender &&
      data.password &&
      data.country
    ) {
      let users = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [];
      const check = users.filter((item) => item.email === data.email);
      if (check.length > 0) {
        alert('Email Already Registered!');
      } else {
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        setData(initialState);
        console.log(users);
        history('/login');
      }
    } else {
      alert('Please fill details properly');
    }
  };

  return (
    <div>
      <h3>User Registeration</h3>
      <form>
        <div className="form-group">
          <p>Name</p>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            name="name"
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <p>Email</p>
          <input
            type="email"
            value={data.email}
            className="form-control"
            placeholder="Enter email"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <p>Contact No.</p>
          <input
            type="number"
            pattern="[0-9]{5} [0-9]{5}"
            value={data.contact}
            className="form-control contact"
            placeholder="12345-67890"
            onChange={(e) =>
              setData({
                ...data,
                contact: e.target.value,
              })
            }
          />
        </div>

        <div className="form-control">
          <p>Gender</p>
          <div>
            <input
              type="radio"
              onChange={(e) => {
                setData({
                  ...data,

                  gender: e.target.value,
                });
              }}
              id="male"
              name="gender"
              value="Male"
            />
            <label>Male</label>
            <input
              onChange={(e) => {
                setData({
                  ...data,

                  gender: e.target.value,
                });
              }}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label>Female</label>
          </div>
        </div>

        <div className="form-group">
          <p>Hobbies</p>
          <div>
            <input
              type="checkbox"
              onChange={() => handleHobby('Video Games')}
              id="hobby1"
              name="hobby1"
              value="Video Games"
            />
            <label> I like to play Video Games</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => handleHobby('Travelling')}
              id="hobby2"
              name="hobby2"
              value="Travelling"
            />
            <label> I Love Travelling</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => handleHobby('Programming')}
              id="hobby3"
              name="hobby3"
              value="Programming"
            />
            <label> I like to Code</label>
          </div>
        </div>

        <div className="form-group">
          <p>Choose your Country</p>
          <Form.Control
            as="select"
            onChange={(e) => {
              setData({
                ...data,

                country: e.target.value,
              });
            }}
          >
            <option>Select</option>
            <option>India</option>
            <option>Australia</option>
            <option>Japan</option>
            <option>US</option>
            <option>UK</option>
          </Form.Control>
        </div>

        <div className="form-group">
          <p>Password</p>
          <input
            type="password"
            value={data.password}
            className="form-control"
            placeholder="Enter password"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
        </div>

        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="submit"
        >
          Register
        </button>
        <p>
          Already registered <span onClick={login}>Log in?</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
