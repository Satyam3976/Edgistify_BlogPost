import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import { PropTypes } from 'react'
import Navigation from "../Shared/Navigation";
import { useAlert } from 'react-alert'

const logoutHandler = () => {
  // this.setState({ loggedIn: false});
  localStorage.setItem('userID', '');
  localStorage.setItem('token', '');
  localStorage.setItem('auth', 'false');
};

const Login = (props)=> {

  const alert = useAlert()

  console.log(props.updateUser);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('//localhost:3000/auth/login', { email, password })
      .then(res => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.accessToken)
          localStorage.setItem('userID', res.data.userID)
          localStorage.setItem('auth', "true")
          props.history.push('/displayPost');
        } else {
          console.log(res.data)
          alert.show('Please enter valid credentials')
          props.history.push('/login');
        }
      })
  }
  return (
    <>
      <Navigation onLogout={logoutHandler} />
    <section className="form">
      <h2 className="title">Log In:</h2>
      <form id="log-in" onSubmit={handleLogin}>
        <label>Email or Username:</label>
        <input type="text" required onChange={(e) => setEmail(e.target.value)} />
        <label>Password :</label>
        <input type="password" required
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit" className="btn">Login</button>
        {/* <input type="submit" className="btn"/> */}
        <Link to="/signup">New here? Sign Up!</Link>
      </form>
    </section>
    </>
  );
}

export default Login;
