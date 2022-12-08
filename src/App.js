import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Registeration/Register';
import Protected from './Protected/Protected';

function App() {
  // useEffect(() => {
  //   localStorage.setItem('isLogIn', false);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Protected Component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
