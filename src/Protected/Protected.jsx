import React, { Component, useEffect } from 'react';
import { useNavigate, redirect, Navigate } from 'react-router-dom';

const Protected = (props) => {
  const history = useNavigate();
  const { Component } = props;
  const isLogin = JSON.parse(localStorage.getItem('isLogIn'));
  useEffect(() => {
    if (isLogin == true) {
      console.log(' Ia m login ');
    } else {
      history('/login');
    }
  }, []);
  return <>{isLogin && <Component />}</>;
};

export default Protected;
