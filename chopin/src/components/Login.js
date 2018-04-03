import React, { Component } from 'react';
import './../App.css';

class Login extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div><a href="http://localhost:3001/login">Log in</a></div>
    );
  }
}

export default Login;
