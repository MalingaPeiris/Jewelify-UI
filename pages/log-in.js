//new login with React
import React, { Component, useState, useCallback } from 'react';
import axios from "axios";
import { setCookie } from 'nookies';

export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   email: this.email,
    //   password: this.password,
    // };

    // axios
    //   .post("http://localhost:9000/.netlify/functions/sign-up", data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // With JWT 
    try {
      const response = await axios.post('http://localhost:9000/.netlify/functions/Signup', {
        email,
        password,
      })
  
      setCookie({ res }, 'jwt', response.data.jwt, {
        httpOnly: true,
        secure: process.env.NEXTAUTH_URL !== 'development',
        
        path: '../signin.js',
      });
  
      res.status(200).end();
    } catch (e) {
      res.status(400).send(e.response.data.message[0].messages[0]);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
}
